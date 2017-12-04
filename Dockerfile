FROM golang

WORKDIR /go/src/app
COPY . .

RUN go-wrapper download
RUN go-wrapper install

#RUN dep ensure -vendor-only

CMD ["go-wrapper", "run"]
