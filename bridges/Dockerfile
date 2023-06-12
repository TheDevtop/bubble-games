# docker build -t bg/bridges .
FROM mcr.microsoft.com/dotnet/sdk:7.0

WORKDIR /app

COPY . .

RUN dotnet publish -o /app/

EXPOSE 5000
VOLUME /data

CMD [ "/app/bridges" ]
