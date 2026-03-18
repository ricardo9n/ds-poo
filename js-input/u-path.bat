for /f "tokens=*" %%A IN ('npm prefix -g') DO set caminho=%%A 
set path=%caminho%;%path%

for /f "tokens=*" %%A IN ('npm root -g') DO set caminho=%%A 
set path=%caminho%;%path%
echo %path%