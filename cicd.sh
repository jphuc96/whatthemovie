#! /bin/sh
COMMIT_HASH=$(git rev-parse HEAD | cut -c -10)
HERE=$PWD

docker build . -t jphuc96/whatthemovie:$COMMIT_HASH -t jphuc96/whatthemovie:latest

docker push jphuc96/whatthemovie:$COMMIT_HASH
docker push jphuc96/whatthemovie:latest

cd deploy
kustomize edit set image main=jphuc96/whatthemovie:$COMMIT_HASH
kustomize build | kubectl apply -f -

cd $HERE

git commit -a -m "newTag -> $COMMIT_HASH"