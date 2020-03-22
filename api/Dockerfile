# Dockerfile

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY api.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "api.dll"]

# docker build -t tagName .
# docker run -p httpPort:tcpPort -d dockerImageId
# docker tag web-api:v1 foodrepo.azurecr.io/web-api:v1
# docker push foodrepo.azurecr.io/web-api:v1
