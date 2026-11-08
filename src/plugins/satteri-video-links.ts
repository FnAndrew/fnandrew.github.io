import type { Element } from "hast"
import { defineHastPlugin } from "satteri"

function isElement(node: unknown): node is Element {
  return (
    typeof node === "object" &&
    node !== null &&
    "type" in node &&
    (node as { type: string }).type === "element"
  )
}

export const videoLinks = defineHastPlugin({
  name: "video-links",
  element: {
    filter: ["a"],
    visit(node, ctx) {
      const href = node.properties.href
      const preview = node.children[0]

      if (
        typeof href !== "string" ||
        !/\.mp4(?:$|[?#])/.test(href) ||
        !isElement(preview) ||
        preview.tagName !== "img"
      ) {
        return
      }

      const poster = "/video/turex-thumbnail-turet-pan.jpg"
      ctx.replaceNode(node, {
        type: "element",
        tagName: "video",
        properties: {
          controls: true,
          preload: "metadata",
          playsInline: true,
          ...(typeof poster === "string" ? { poster } : {}),
        },
        children: [
          {
            type: "element",
            tagName: "source",
            properties: { src: href, type: "video/mp4" },
            children: [],
          },
        ],
      })
    },
  },
})