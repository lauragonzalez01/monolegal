# Prueba Monolegal

El proyecto consiste en una aplicación web para ver y gestionar el estado de las facturas de una compañia.

## Ambiente

- .Net Core
- Angular
- MongoDB

## Herramientas de desarrollo

- Robo3T
- Visual Studio
- WebStorm
- Github
- Postman

## Dependencias

El proyecto usa las siguientes dependencias:

- System.Net.Mail
- MongoDB

Ademas de las dependecias escenciales pordefecto para un web API en .Net Core

## Repositorio

El repositorio del codigo se encuentra en Github en un repositorio publico que se puede encontrar en el siguiente link:

https://github.com/lauragonzalez01/monolegal

Cabe aclarar que para el presente proyecto aun cuando solo hubo un contribuidor(lauragonzalez01) se crearon dos ramas
por organizacion, en la main se puede encontrar la rama principal que contiene la base de los proyectos tanto del back
como en el front, y la rama develop donde se encuentra la totalidad del desarrollo y funcionalidades completadas

Para descargar el proyecto basta con ejecutar el siguiente comando en una consola de git:

git clone https://github.com/lauragonzalez01/monolegal.git

## Ejecucion

### Back

Luego de abrir el proyecto proceda a la carpeta del back llamada monolegalAPI donde se encuentra alojada la API
correspondiente, abra dicha carpeta mediante la aplicacion de visual studio, instale las dependencias de ser necesario.

Verifique que el puerto 5282 este disponible en su maquina, puesto que por este puerto es que esta configurada la
aplicacion para levantar en local, en caso de querer cambiar dicho puerto puede hacerlo libremente modificando el
archivo JSON llamado launchSettings, especificamente la propiedad de applicationUrl.

Luego de esto proceda a ejecutar la aplicacion, alli debera abrirse el automaticamente el swagger que contiene la
definicion detallada de los endpoints que contiene el API

### Front

Para el caso del front dirijase a la carpeta llamada front del mismo repositorio, sera necesariopreviamente haber
instalado npm y angular, ya que ambos son indispensables para el funcionamiento del mismo, una vez situado en la carpeta
ejecute el comando npm install para instalar las dependencias que requiera luego ejecute el comando npm start, esto debe
ejecutar la aplicacion del lado del front la cual encontrara en el puerto 4200 de su localhost, abrala mediante el
explorador de su preferencia

### Base de datos

Para el caso de la base de datos no se debe hacer nada ya que se encuentra alojada en un cluster en la nube, por tanto
no se debe ver afectada la conexion con la misma, sin embargo si asi lo desea puede conectarse con el gestor de base de
datos de su preferencia, aunque se recomienda robo3t mediante la siguiente URL:

mongodb+srv://lauragonzalez:monolegal@monolegal.5y26y.mongodb.net/test

Cabe aclarar las credenciales que son las siguientes en caso de que asi se requiera:
Usuario: lauragonzalez Password: monolegal

Alli encontrara dos colecciones que se crearon en base a los requerimientos, una que corresponde a la informacion de las
facturas y otra relacionada con la informacion del cliente.

La base de datos ha sido poblada previamente con diferentes clientes y facturas que presentaran distintos casos, con el
fin de probar a fondo las funcionalidades. Sientase libre de agregar, modificar y eliminar la data si asi lo requiere,
se recomienda que añada un cliente con un correo de su dominio y le añada una factura relacionada a dicho cliente, con
el fin de visualizar de primera mano el correo electronico.

## Tests unitarios

El desarrollo cuenta con test unitarios los cuales pueden ser ejecutados en la carpeta del front mediante el comando npm
run test alli se desplegara un reporte de la cobertura y el estado de cada test que se desarrollo

## Estado de la aplicacion

Actualmente la aplicacion se encuentra completamente terminada segun los requerimientos, se realizo el desarrollo en
Visual Studio, usando a mongoDB como base de datos y a Robo3T como el gestor visual de la base de datos, se diseñaron
las colecciones segun los requerimientos, el webapi se realizo basada en el principio de MVC y es alli mismo en el
webapi donde se encuentra la conexion con la base de datos, se implementaron test unitarios en Angular y se desarrollo
el front en Angular, por ultimo se realizo el codigo haciendo lo mejor posible por velar por la calidad y limpieza del
codigo.

## Funcionamiento de la aplicación

### Vista de facturas

![invoice_view.png](invoice_view.png)

En esta vista se puede ver la informacion detallada de las facturas contenida en una tabla, alli se puede observar el
estado de cada factura lo cual es de suma importancia ya que dicho estado cambia al enviarse el recordatorio

### Vista de clientes

![client_view.png](client_view.png)

En esta vista se puede ver la informacion detallada de los clientes contenidos en una tabla, alli se pueden observar los
emails a los cuales se envia el recordatorio

### Vista de recordatorios

![reminder_view.png](reminder_view.png)

En esta vista se puede observar una descripcion de lo que se hace al enviar el recordatorio, asi como un boton el cual,
al presionarlo enviara un correo a todos los clientes cuyas facturas se encuentren en estado "primerrecordatorio" o "
segundorecordatorio", notificandoles que avanzaran al siguiente estado, en el caso de estar en "primerrecordatorio"
pasara a "segundorecordatorio", y en caso de estar en "segundorecordatorio" pasara a "desactivado", a su vez se
actualizara dicho estado en la base de datos, al dar click al boton se abrirar un modal con un mensaje de acuerdo a si
fue o no exitosa la operación.

### Correo enviado

![mail_view.png](mail_view.png)

En esta vista se puede observar el correo que se le envia a los clientes, el asunto y el cuerpo del correo personalizado
con la informacion de las facturas que corresponde especificamente a cada uno

Muchas gracias por la atencion, en caso de comentarios o inquietudes estare disponible en el siguiente correo:

lauragonzalez2464@gmail.com
