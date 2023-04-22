function stop()
{
    DOCKER_ID=$(docker ps -q)
   if [ "${DOCKER_ID}" != "" ]; then
    echo "Docker stop..."
    eval "docker stop ${DOCKER_ID}"
    fi
}

function prune()
{
  docker system prune -a --volumes
}

function menu()
{
    echo "For all Docker containers or images"
    echo "1 - Stop the containers"
    echo "2 - Remove all stopped containers, unused images, networks and volumes not used by at least one container and all build cache"
    echo "3 - Quit and not do anything"

    PS3="옵션을 선택하세요 > "
    COLUMNS=30
    options=("Stop" "Prune" "Quit")
    select yn in "${options[@]}"; do
        case $yn in
            "Stop" ) stop; break;;
            "Prune" ) stop; prune; break;;
            "Quit" ) exit;;
        esac
    done
}
menu