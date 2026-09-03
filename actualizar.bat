@echo off
chcp 65001 >nul
echo [ * ] Generando repo-index.json limpio...

(
echo {
echo   "last_update": "%date% %time%",
echo   "files": {
) > repo-index.json

setlocal enabledelayedexpansion
set "niveles=01_basico 02_auxiliar 03_tecnico_medio 04_tecnico_superior 05_directiva_cetal Proyectos"

set "first_n=1"
for %%N in (%niveles%) do (
    if exist "archivos\%%N" (
        if "!first_n!"=="0" (
            echo     ^},
        ) >> repo-index.json
        set "first_n=0"
        echo     "%%N": { >> repo-index.json
        
        set "subcarpetas=apuntes excel_planillas investigaciones powerpoint_presentaciones word_documentos"
        set "first_s=1"
        
        for %%S in (!subcarpetas!) do (
            if "!first_s!"=="0" (
                echo       ^},
            ) >> repo-index.json
            set "first_s=0"
            echo       "%%S": [ >> repo-index.json
            
            set "first_f=1"
            if exist "archivos\%%N\%%S\*.*" (
                for %%F in ("archivos\%%N\%%S\*.*") do (
                    set "filename=%%~nxF"
                    if /i not "!filename!"=="repo-index.json" if /i not "!filename!"=="actualizar.bat" (
                        if "!first_f!"=="0" (
                            echo         ,
                        ) >> repo-index.json
                        set "first_f=0"
                        echo         "!filename!" >> repo-index.json
                    )
                )
            )
            echo       ] >> repo-index.json
        )
        echo     } >> repo-index.json
    )
)

(
echo   }
echo }
) >> repo-index.json

echo.
echo [ ✔ ] ¡JSON generado sin errores de sintaxis!
pause