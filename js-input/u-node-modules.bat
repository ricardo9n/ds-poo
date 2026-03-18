for /f "tokens=*" %%A IN ('npm root -g') DO set caminho=%%A 
set node_modules=%caminho%;%node_modules%
echo %node_modules%