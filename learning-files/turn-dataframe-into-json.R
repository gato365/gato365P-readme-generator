library(dplyr)
setwd("C:/Users/james/Bootcamp/challenge-questions-and-projects/challenge-question-9/gato365P-readme-generator/learning-files")
df = readxl::read_xlsx('list-of-licenses.xlsx')
licences_json <- jsonlite::toJSON(df)
write(licences_json,'new-licenses-json.json')#, row.names = FALSE, col.names = FALSE)
