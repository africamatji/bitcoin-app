<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://static.wixstatic.com/media/4e30bd_917c1a4b521347b3938f5a1052fbba80~mv2.png/v1/fill/w_572,h_140,al_c,lg_1,q_85,enc_auto/yomane_edited_edited.png" width="200" alt="Nest Logo" /></a>
</p>
 
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Techinal assesement for YoMane by Africa Matji

### - Server Requirements
##### Node v18.13.0


## (Option 1) Running the app (Using Docker)

###
```bash
$ docker-compose up # inside root directory of the project
```
This will orchestrate both the front-end and back-end containers.

 - Angular application at [localhost:8888](http://localhost:8888).
 - NestJs API at [localhost:3000](http://localhost:3000).


## (Option 2) Running the app (Manually)

### (a) Back End
```bash
$ cd back-end/ # directory
$ yarn install
$ yarn run start:prod
```
This will run the NestJs API at [localhost:3000](http://localhost:3000/bitcoin/exchange/zar).

### (b) Front End
```bash
$ cd front-end/ # directory
$ yarn install
$ yarn run build
$ yarn run start
```
This will run the Angular application at [localhost:4200](http://localhost:4200).


