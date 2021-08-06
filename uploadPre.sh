#!/usr/bin/env sh

# abort on errors
set -e

scp -pC docs/*.* ubuntu@safeisland:/home/ubuntu/EvidenceLedger.Verifier.Pre/

# rsync -auzi docs/ ubuntu@safeisland:/home/ubuntu/EvidenceLedger.Verifier.Pre
