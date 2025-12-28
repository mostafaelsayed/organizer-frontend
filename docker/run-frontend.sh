source remove-frontend.sh

docker run --name organizer-frontend \
    -p 5173:5173 \
    -e VITE_SERVER_URL=http://localhost:4000 \
    -t organizer/frontend