#!/bin/bash
cd /home/kavia/workspace/code-generation/evolvlingua-9592-9599/main_container_for_evolvlingua
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

