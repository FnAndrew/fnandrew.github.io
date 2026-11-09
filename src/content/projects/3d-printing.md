---
title: 3D printing
description: A collection of practical 3D-printing projects, from custom mechanisms to interactive gifts and decorations.
fromDate: 2024-12
types:
  - tool
skills:
  - 3D printing
  - Modeling
  - Decoration
---

## 3D printers

Durring my 3D carrer I've been ussing totally four 3D printer models:

- BambuLab P1S with AMS
- Prusa MK4
- Two Trees Bluer
- Anycubic Photon Mono _(resin)_

## Interactive Railway Signal

This project started as a custom gift for a train driver. Instead of making a
static model, I decided to build a working railway signal with individually
controlled LEDs and remote operation.

The signal is based on a [public model from
Modelwiki](https://modelwiki.klfree.net/w/index.php/V%C3%BDroba_n%C3%A1v%C4%9Bstidla_A%C5%BDD),
which I adapted in Autodesk Fusion for electronics and assembly. I enlarged
the signal head to make room for the LEDs, closed unused openings, and designed
the rear cover, post, and base from scratch.

![Completed interactive railway signal with illuminated lights](./assets/3d-printing/navestidlo/navestidlo-complete-green.jpg)

_The completed signal with independently illuminated aspects._

### From model to printed parts

The parts were printed on a BambuLab P1S with AMS. The multi-colour setup made
it possible to print the signal housing and coloured details in a single
workflow, although most parts still needed cleanup, fitting, and a small amount
of cyanoacrylate adhesive during assembly.

![Printed railway signal parts before assembly](./assets/3d-printing/navestidlo/navestidlo-parts.jpg)

_All the 3D printed parts prepared for assembly._

### Wiring and electronics

The LED wiring runs through the post in six conductors. Each light in the head
has its own wire and resistor, with a shared ground connection. The wires then
connect to an ESP32-C3 Mini at the base, where the controller manages the
individual signal aspects.

![Glued railway signal with cables](./assets/3d-printing/navestidlo/navestidlo-wiring.webp)

_Complete wiring, connecting LEDs and ESP board._

### Firmware and control

The ESP32-C3 Mini can create its own Wi-Fi network or use a wired connection.
The signal lights can then be **controlled remotely** and configured through saved
presets, giving the model behaviour similar to a **real railway signal**.

The interactive model can be tried at
[navestidlo.kruckyondrej.cz](https://navestidlo.kruckyondrej.cz/).

## Prints gallery

3D printing is one of my favourite ways to turn an idea into something useful
and tangible. I enjoy designing practical parts, experimenting with different
materials and finishes, and refining each print until it works as intended.

| | |
| --- | --- |
| ![Hand-colored plastic figure on a table](./assets/3d-printing/gallery/print-hollow-knight.png) | ![Multi-color real-size Poke ball in hand](./assets/3d-printing/gallery/print-pokeball.jpg) |
| _Hollow Knight figure_ | _Poke Ball_ |
| ![3D-printed black Rayquaza](./assets/3d-printing/gallery/print-pokemon.jpg) | ![3D-printed project](./assets/3d-printing/gallery/print-infills.webp) |
| _Pokemon "Rayquaza" figure_ | _Infills for Pokemón tabletop game_ |
| ![Thumbnail of a 3D printer car with turret](./assets/3d-printing/gallery/turex-showcase.png) | ![Resin figure with sword](./assets/3d-printing/gallery/print-resin.webp)|
| _[Turex](/projects/turex) body parts_ | My first character from resin |


