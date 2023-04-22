function run()
{
    echo "Docker Run..."
    eval "docker run -p80:3000 nestjs-docker-run"
}

function build()
{
    echo "Docker Build..."
    eval "docker build -t nestjs-docker-run ."
}


function menu()
{
    PS3="빌드와 실행 방식을 선택하세요 > "
    COLUMNS=30
    options=("Build and Run" "Run" "Quit")
    select yn in "${options[@]}"; do
        case $yn in
            "Build and Run" ) build; run; break;;
            "Run" )           run; break;;
            "Quit" )          exit;;
        esac
    done
}
menu