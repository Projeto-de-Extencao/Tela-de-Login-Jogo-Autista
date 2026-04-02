import re

with open('mk3.html', 'r', encoding='utf-8') as f:
    text = f.read()

css = re.search(r'(?s)<style>(.*?)</style>', text).group(1).strip()
js = re.search(r'(?s)<script>(.*?)</script>', text).group(1).strip()

html = re.sub(r'(?s)\s*<style>.*?</style>', '\n    <link rel="stylesheet" href="style.css">', text)
html = re.sub(r'(?s)<script>.*?</script>', '<script src="game.js"></script>', html)

with open('LumiLand.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

with open('game.js', 'w', encoding='utf-8') as f:
    f.write(js)
