"""Assemble the Jump GIF from imagegen layers. Requires Pillow (pip install Pillow)."""
from pathlib import Path
import math
import sys

ROOT = Path(__file__).resolve().parents[1]
# Also support the project-local, ignored build dependency installation.
sys.path.insert(0, str(ROOT / 'work' / 'gif-deps'))
from PIL import Image

ASSETS = ROOT / 'public' / 'assets' / 'mechanics'
SOURCE = ASSETS / 'source'
SIZE = (960, 540)
background = Image.open(SOURCE / 'jump-background.png').convert('RGBA').resize(SIZE, Image.Resampling.LANCZOS)
sprite = Image.open(SOURCE / 'jump-sprite.png').convert('RGBA')
sprite = sprite.crop(sprite.getchannel('A').point(lambda a: 255 if a > 32 else 0).getbbox())
sprite = sprite.resize((round(sprite.width * 86 / sprite.height), 86), Image.Resampling.LANCZOS)

# The authored motion follows the illustration's dotted arc and lands on the platform.
frames = []
def frame(t, squash=0.0, opacity=1.0):
    x = 258 + 454 * t
    foot_y = 357 - 4 * 142 * t * (1 - t)
    actor = sprite.resize((round(sprite.width * (1 + squash)), round(sprite.height * (1 - squash))), Image.Resampling.LANCZOS)
    if opacity < 1:
        actor.putalpha(actor.getchannel('A').point(lambda a: round(a * opacity)))
    result = background.copy()
    result.alpha_composite(actor, (round(x - actor.width / 2), round(foot_y - actor.height)))
    frames.append(result.convert('RGB'))

for i in range(8):
    frame(0, squash=0.12 * math.sin(math.pi * i / 7))
for i in range(1, 33):
    frame(i / 32)
for i in range(6):
    frame(1, squash=0.16 * math.sin(math.pi * i / 5))
for _ in range(8):
    frame(1)
for i in range(1, 6):
    frame(1, opacity=1 - i / 5)
for i in range(1, 6):
    frame(0, opacity=i / 5)

# A shared palette and delta frames keep the stationary background stable and small.
palette_sample = background.copy()
palette_sample.alpha_composite(sprite.resize((sprite.width * 3, sprite.height * 3)), (0, 0))
palette = palette_sample.convert('RGB').quantize(colors=192)
indexed = [f.quantize(palette=palette, dither=Image.Dither.NONE) for f in frames]
indexed[0].save(ASSETS / 'jump.gif', save_all=True, append_images=indexed[1:], duration=40, loop=0, optimize=True, disposal=1)
Image.open(SOURCE / 'jump-still.png').convert('RGB').resize(SIZE, Image.Resampling.LANCZOS).save(ASSETS / 'jump.jpg', quality=90, optimize=True)

with Image.open(ASSETS / 'jump.gif') as gif:
    assert gif.n_frames > 30 and gif.info['loop'] == 0
    print(f'Created {gif.n_frames} GIF frames, {gif.size}, {(ASSETS / "jump.gif").stat().st_size:,} bytes')
for index in (0, 23, 40):
    frames[index].save(ROOT / 'work' / f'jump-frame-{index}.png')
