[WELT.boot]
version = 1.0
type    = "welt-boot"

boot.sequence = [
  "WELT.portal.activate",
  "WELT.layer.activate",
  "WELT.room.activate",
  "WELT.sync.activate",
  "WELT.index.activate",
  "WELT.visuals.activate"
]

boot.output = "WELT.boot.final"
boot.state  = "active"
