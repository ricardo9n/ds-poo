for /f "tokens=*" %%A IN ('npm prefix -g') DO set caminho=%%A 
set node_path=%caminho%;%node_path%

for /f "tokens=*" %%A IN ('npm root -g') DO set caminho=%%A 
set node_path=%caminho%;%node_path%
echo %node_path%