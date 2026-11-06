import { getCollection, render } from "astro:content"

import { createLocalDate, extractDateFromStr } from "./date-utils"

export interface RenderedUpdate {
  date: Date // from update id
  endDate?: Date
  dateLabel?: string
  Content: Awaited<ReturnType<typeof render>>["Content"]
}

/**
 * Get the latest N updates and process them efficiently.
 *
 * If count is not passed, render all updates
 */
export async function getLatestUpdates(
  count?: number,
): Promise<RenderedUpdate[]> {
  // Get all updates with parsed dates for efficient sorting
  const allUpdates = await getCollection("updates", ({ id }) => {
    const dateString = extractDateFromStr(id)
    return dateString !== null // Filter out invalid dates at query time
  })

  // Parse dates once and sort efficiently
  const updatesWithDates = allUpdates.map((update) => {
    const dateString = extractDateFromStr(update.id)!
    const date = update.data.startDate ?? createLocalDate(dateString)
    return { update, date, dateTime: date.getTime() }
  })

  // Sort by pre-computed timestamp
  updatesWithDates.sort((a, b) => a.dateTime - b.dateTime)

  // Slice early to avoid unnecessary processing
  const latestUpdatesWithDates =
    count && count > 0 ? updatesWithDates.slice(0, count) : updatesWithDates

  // Process only the latest updates
  const renderedUpdates = await Promise.all(
    latestUpdatesWithDates.map(async ({ update, date }) => {
      const { Content } = await render(update)
      return {
        Content,
        date,
        endDate: update.data.endDate,
        dateLabel: update.data.dateLabel,
      }
    }),
  )

  return renderedUpdates
}
