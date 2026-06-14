import zlib, struct, os

BG = (38, 36, 31)      # #26241F
FG = (247, 246, 243)   # #F7F6F3

# 5x7 bitmap of the letter "B"
GLYPH = [
    "11110",
    "10001",
    "10001",
    "11110",
    "10001",
    "10001",
    "11110",
]

def make_png(size, path):
    # glyph occupies ~46% of icon height, centered (safe for maskable icons)
    gh = int(size * 0.46)
    cell = gh // 7
    gw = cell * 5
    gh = cell * 7
    ox = (size - gw) // 2
    oy = (size - gh) // 2

    row = bytearray()
    raw = bytearray()
    for y in range(size):
        raw.append(0)  # filter type 0
        for x in range(size):
            r, g, b = BG
            gx, gy = x - ox, y - oy
            if 0 <= gx < gw and 0 <= gy < gh:
                if GLYPH[gy // cell][gx // cell] == "1":
                    r, g, b = FG
            raw += bytes((r, g, b))

    def chunk(typ, data):
        c = struct.pack(">I", len(data)) + typ + data
        return c + struct.pack(">I", zlib.crc32(typ + data) & 0xffffffff)

    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0)  # 8-bit RGB
    idat = zlib.compress(bytes(raw), 9)
    with open(path, "wb") as f:
        f.write(sig + chunk(b"IHDR", ihdr) + chunk(b"IDAT", idat) + chunk(b"IEND", b""))
    print("wrote", path, size, "x", size)

out = os.path.join("frontend", "public")
make_png(192, os.path.join(out, "icon-192.png"))
make_png(512, os.path.join(out, "icon-512.png"))
