FROM ravindu01manoj/sewqueen:lovegift

RUN git clone https://github.com/ravindu01manoj/qr /root/qr
WORKDIR /root/qr/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "qr.js"]
