
docker run --rm ^
  -v %CD%:/local openapitools/openapi-generator-cli generate ^
  -i /local/client-api.json ^
  -g typescript-angular ^
  -t /local/templates ^
  -o /local
