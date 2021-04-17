#!/bin/bash
#╔═══════════════════════════════════════════════════════════════════════════════╗
#║ ♠ File Name: _v.2_install.sh                                                  ║
#║ ↔ Location: <: public_root :>/ _a^o_content_ / builder / _v.2_install.sh      ║
#║ Σ Description:                                                                ║
#║     → In case this lives more than few days, better have something prepared   ║
#╟       than few days, better have something prepared have as   ╔═══════════════╣
#║       than few days, better have something prepared.          ║ √ 17.04.2021. ║
#╚═══════════════════════════════════════════════════════════════╩═══════════════╝
GlobalsFILENAME="_global_npm_install"
GlobalsFILE="_a^o_content_/builder/$GlobalsFILENAME"
if [ -f "$GlobalsFILE" ]; then
    echo "$GlobalsFILE exists."
    Lines=$(cat $GlobalsFILE)
    for Line in $Lines; do
        echo "Found global package to install, name: $Line ;"
        echo ""
        echo "╔══════════════════════════════════════════════════╗"
        echo "║ SUCCESS:[ Found in < $GlobalsFILENAME > file ]║"
        echo "║ Starting install of global packages for node.    ║"
        echo "╠══════════════════════════════════════════════════╝"
        echo "║ packageName: $Line"
        echo "╚═══════════════════════════════════"
        echo ""
        bash -c "npm install --global $Line"
        echo ""
        echo "╔══════════════════════════════════════════════════╗"
        echo "║ STATUS:[ FINISHED < $GlobalsFILENAME > file ] ║"
        echo "║ Global Node Install Finished.                    ║"
        echo "╚══════════════════════════════════════════════════╝"
        echo ""
    done
else
    echo ""
    echo "╔══════════════════════════════════════════════════╗"
    echo "║ ERROR: [ Missing < $GlobalsFILENAME > file ]  ║"
    echo "║ No global node dependency found for install.     ║"
    echo "╟━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╢"
    echo "║ HINT: Make file called < $GlobalsFILENAME >   ║"
    echo "║       just next to this install.sh file and use  ║"
    echo "║       the benefit of autoinstalling your globals.║"
    echo "╚══════════════════════════════════════════════════╝"
    echo ""
fi
