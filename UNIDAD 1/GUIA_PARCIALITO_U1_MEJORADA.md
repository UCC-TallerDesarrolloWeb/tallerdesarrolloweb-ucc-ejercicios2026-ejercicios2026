# Guia Mejorada Parcialito Unidad 1

Esta guia esta pensada para multiple choice. No es para leer como apunte largo: es para reconocer respuestas correctas rapido.

## Como parece tomar el profe

En el quiz no alcanza con "entender mas o menos". Toman tres cosas:

1. Definiciones cortas.
2. Diferencias entre conceptos parecidos.
3. Ejemplos de herramientas por categoria.

El formato mas repetido es:

> Seleccione una o mas de una.

Eso significa que muchas preguntas no tienen una sola respuesta. Si marcas solo una cuando hay cuatro correctas, te baja mucho la nota aunque esa una sea correcta.

## Regla de oro para multiple choice

Cuando veas una pregunta, pensala asi:

- Si pregunta "que es": busca definicion.
- Si pregunta "que permite hacer": busca acciones reales.
- Si pregunta "herramientas de": busca ejemplos de esa categoria.
- Si pregunta "buenas practicas": descarta extremos como "siempre", "nunca", "elimina completamente", "manual", "sin pruebas".

## 1. Integracion Continua, CI

### Definicion corta

La Integracion Continua es una practica donde los cambios de codigo se integran frecuentemente en un repositorio compartido y se verifican automaticamente.

### Correcto en multiple choice

Marca opciones que digan:

- Integrar cambios de codigo frecuentemente.
- Repositorio compartido.
- Verificacion automatica.
- Pruebas, builds u otros procesos.
- Detectar errores temprano antes del despliegue.
- GitLab CI, Jenkins, GitHub Actions, Azure Pipelines.

### Incorrecto tipico

No marques:

- Enviar correos manuales.
- Auto-escribir codigo.
- Desactivar pruebas unitarias.
- Hacer todo manualmente.

### Frase para memorizar

CI = cambios frecuentes + repo compartido + verificacion automatica.

## 2. Entrega Continua, CD

### Definicion corta

La Entrega Continua busca que el software pueda liberarse de forma confiable en cualquier momento, con ciclos cortos y procesos rapidos de construccion, prueba y liberacion.

### Correcto en multiple choice

Marca opciones que digan:

- Software liberable de forma confiable en cualquier momento.
- Construccion, prueba y liberacion mas rapida y frecuente.
- Producir software en ciclos cortos.
- Flujo desde codigo hasta empaquetado y prueba lista para produccion.

### Incorrecto tipico

No marques:

- No tiene relacion con CI.
- Elimina la necesidad de pruebas automaticas.
- Requiere que usuarios modifiquen codigo manualmente.

### Diferencia clave

| Concepto | Idea principal |
|---|---|
| CI | Integro cambios y los verifico automaticamente. |
| CD | Dejo el software listo para liberar confiablemente. |

## 3. IDE y editor

### IDE

Un IDE es un entorno de desarrollo integrado. Junta varias herramientas en una misma interfaz.

Puede incluir:

- Editor de codigo.
- Compilador.
- Interprete.
- Debugger.
- Herramientas de construccion.

### Ejemplos de IDE/editor usados para desarrollo web

- Visual Studio Code.
- WebStorm.
- Cursor.
- Sublime Text.
- Eclipse.
- NetBeans.

### Trampa

Un editor de codigo no es exactamente lo mismo que un IDE completo, aunque algunos editores modernos tienen muchas extensiones.

## 4. Debugger o depurador

### Definicion corta

Un debugger sirve para encontrar, analizar y corregir errores mientras el programa se ejecuta.

### Correcto en multiple choice

Marca opciones que digan:

- Detener la ejecucion en un punto especifico.
- Breakpoint.
- Ejecutar instrucciones paso a paso.
- Examinar memoria y variables.
- Modificar variables en tiempo de ejecucion.
- Cambiar el punto de ejecucion.
- Probar y eliminar errores.

### Incorrecto tipico

No marques:

- Traducir todo el proyecto a codigo maquina.
- Compilar automaticamente.
- Formatear codigo.

### Frase para memorizar

Debugger = pausar + mirar variables + paso a paso + corregir errores.

## 5. Compilador vs interprete

| Concepto | Que hace |
|---|---|
| Compilador | Traduce el codigo antes de ejecutar, generando codigo maquina, intermedio o texto. |
| Interprete | Traduce y ejecuta instruccion por instruccion cuando hace falta. |

### Ejemplos

Compilados:

- C.
- C++.
- Go.
- Rust.
- Fortran.
- Pascal.

Interpretados:

- Python.
- JavaScript.
- Ruby.
- PHP.

## 6. Linter vs Prettier

| Herramienta | Sirve para |
|---|---|
| Linter | Analiza codigo sin ejecutarlo para detectar errores, malas practicas o problemas de estilo. |
| ESLint | Linter muy usado en JavaScript. |
| Prettier | Formatea codigo automaticamente. |

### Trampa

Prettier no busca principalmente errores logicos. Su foco es el formato.

ESLint no es un repositorio ni un sistema de control de versiones.

## 7. VCS: Sistema de Control de Versiones

### Definicion corta

Un VCS permite gestionar cambios de archivos a lo largo del tiempo.

### Correcto en multiple choice

Marca opciones que digan:

- Clonar o descargar archivos del repositorio.
- Editar y guardar cambios localmente.
- Publicar/subir cambios al repositorio remoto.
- Consultar historial.
- Volver a versiones anteriores.
- Crear ramas.
- Unificar cambios de distintas ramas.
- Facilitar trabajo colaborativo.

### Incorrecto tipico

No marques:

- Formatear automaticamente al versionar.
- Ejecutar analisis estatico antes de versionar.
- Compilar automaticamente al realizar cambios.

### Ejemplos de VCS

- Git.
- SVN.
- Mercurial.
- Bazaar.

En la materia, el importante es Git.

## 8. Git

### Definicion corta

Git es un sistema distribuido de control de versiones, libre, creado por Linus Torvalds en 2005.

### Ideas clave

- Cada clon es un repositorio completo.
- Permite branches y merge.
- Guarda historial de cambios.
- Sirve para trabajar colaborativamente.
- No esta optimizado para videos pesados, instaladores o binarios enormes.

### Estados de Git

| Estado | Significado |
|---|---|
| Untracked | Git todavia no sigue el archivo. |
| Modified | El archivo cambio, pero no esta confirmado. |
| Staged / index | El archivo fue agregado con `git add` para el proximo commit. |
| Unmodified | El archivo no tiene cambios respecto al repositorio. |

## 9. Comandos Git basicos

Estos son los que tenes que reconocer de memoria.

| Comando | Que hace |
|---|---|
| `git --version` | Verifica version instalada de Git. |
| `git config --global user.name "Nombre"` | Configura nombre global. |
| `git config --global user.email mail@dominio.com` | Configura email global. |
| `git config --list` | Muestra configuracion. |
| `git init` | Crea un repositorio Git local. |
| `git clone URL` | Copia un repositorio remoto a tu computadora. |
| `git status` | Muestra estado de archivos. |
| `git add archivo` | Pasa cambios al staging/index. |
| `git add .` | Agrega todos los cambios al staging. |
| `git commit -m "mensaje"` | Guarda cambios en el repositorio local. |
| `git push` | Sube commits al remoto. |
| `git pull` | Trae cambios del remoto al local. |
| `git log` | Muestra historial de commits. |
| `git diff` | Muestra diferencias respecto al ultimo commit. |

### Flujo normal

1. `git clone URL`
2. Modifico archivos.
3. `git status`
4. `git add archivo`
5. `git commit -m "mensaje"`
6. `git push`

## 10. Ramas, merge, fork y pull request

### Branch

Una branch es una rama: un camino paralelo de desarrollo.

Sirve para:

- Desarrollar features.
- Separar trabajo de distintos devs.
- Resolver errores en hotfixes.
- Trabajar sin romper la rama principal.

### Comandos de ramas

| Comando | Que hace |
|---|---|
| `git branch` | Muestra ramas. |
| `git branch nombre` | Crea una rama. |
| `git checkout rama` | Cambia de rama. |
| `git merge rama` | Fusiona esa rama en la rama actual. |

### Main/master

`main` o `master` suele ser la rama principal estable.

### Fork

Un fork es una copia de un repositorio ajeno para modificarlo sin afectar el original.

### Pull Request

Un pull request es una solicitud para incorporar cambios de una rama o fork a otra rama/repositorio.

### Code Review

Code review es la revision de codigo antes de mergear.

Sirve para:

- Detectar errores.
- Mejorar calidad.
- Pedir correcciones.
- Aprobar cambios antes de produccion.

## 11. Git parte II: deshacer y limpiar

| Comando | Que hace |
|---|---|
| `git reset archivo` | Quita un archivo del staging, pero mantiene los cambios. |
| `git stash` | Guarda cambios no commiteados y limpia el directorio. |
| `git stash apply` | Recupera cambios guardados con stash. |
| `git checkout id-commit` | Vuelve visualmente a un commit especifico. |
| `git reset --soft HEAD~1` | Elimina el ultimo commit local, pero conserva cambios. |
| `git reset --hard HEAD~1` | Elimina el ultimo commit local y descarta cambios. |
| `git commit --amend -m "mensaje"` | Modifica el ultimo commit si no fue pusheado. |
| `git revert id` | Deshace un commit ya pusheado creando otro commit. |
| `git rebase rama` | Cambia el punto de partida de una rama para historial lineal. |

### Reset vs revert

| Concepto | Usalo cuando | Que pasa |
|---|---|---|
| `reset` | Todavia no hiciste push o estas trabajando local. | Puede mover/borrar historial local. |
| `revert` | El commit ya fue pusheado. | No borra historial, crea un commit inverso. |

### Soft vs hard

| Comando | Conserva cambios? |
|---|---|
| `git reset --soft HEAD~1` | Si. |
| `git reset --hard HEAD~1` | No. Los descarta. |

## 12. Repositorios de codigo

### Definicion corta

Un repositorio de codigo es un sitio de almacenamiento digital donde se guardan, organizan y administran archivos de un software.

### Ejemplos

- GitHub.
- GitLab.
- Bitbucket.
- Azure Repos.

### Trampa

Git es el sistema de control de versiones. GitHub es una plataforma/repositorio remoto.

## 13. Bug tracker y gestion de proyectos

### Bug tracker

Sirve para registrar, clasificar, asignar y resolver errores.

Ejemplos:

- Jira.
- Azure.
- Bugzilla.
- Flyspray.
- Trac.
- MantisBT.

### Gestion de proyectos

Sirve para planificar, organizar y seguir trabajo en equipo.

Ejemplos:

- Jira.
- Trello.
- Asana.
- Azure Boards.

## 14. Documentacion

### Documentacion del proyecto

Explica el proyecto: uso, instalacion, configuracion, decisiones, etc.

Herramientas:

- Confluence.
- MkDocs.
- Docusaurus.
- Notion.

### Documentacion de codigo

Explica que hace el codigo y por que.

Puede documentar:

- Clase.
- Metodo.
- Parametros.
- Retorno.
- Variables importantes.
- Limitaciones.
- Algoritmos.

### Buenas practicas al documentar codigo

Marca opciones que digan:

- Dividir comentarios en parrafos para mejorar legibilidad.
- Tabular comentarios de lineas consecutivas.
- Evitar comentar obviedades.
- No insultar ni poner frases fuera de contexto.
- Revisar ortografia.
- Mantener comentarios actualizados.
- Documentar mientras se desarrolla.

No marques:

- Documentar solo al final.
- Escribir una sola linea larguisima.
- Comentar todo aunque sea obvio.

## 15. README y Markdown

### README.md

Es la guia rapida del proyecto.

Puede incluir:

- Descripcion.
- Instalacion.
- Uso.
- Configuracion.
- Licencia.
- Autores.
- Bugs conocidos.
- Changelog.
- Creditos.

### Markdown

Sirve para dar formato a texto simple.

| Markdown | Resultado |
|---|---|
| `# Titulo` | Titulo principal. |
| `## Subtitulo` | Subtitulo. |
| `**texto**` | Negrita. |
| `*texto*` | Cursiva. |
| `- item` | Lista. |
| `[texto](url)` | Link. |

## 16. `.gitignore`

### Definicion corta

`.gitignore` le dice a Git que archivos o carpetas no debe versionar/subir.

### Se usa para ignorar

- Archivos privados.
- Credenciales.
- Archivos temporales.
- Dependencias.
- Binarios.
- Instaladores.
- Videos o imagenes muy pesadas.

## 17. Analisis estatico de codigo

### Definicion corta

Es revisar codigo fuente sin ejecutar el programa.

### Correcto en multiple choice

Marca opciones que digan:

- Revisa codigo sin ejecutar.
- Detecta fallos temprano antes de produccion.
- Identifica vulnerabilidades como SQL Injection o XSS.
- Detecta malas practicas.
- Promueve calidad.
- Mantiene estilo uniforme.
- Evita duplicaciones.

### Ejemplo importante

- SonarQube.

### Incorrecto tipico

No marques:

- Ejecutar pruebas unitarias.
- Ejecutar codigo en miles de dispositivos.
- Medir tiempos de respuesta con usuarios concurrentes.

## 18. Testing

### Automatizacion de pruebas

Ejecuta validaciones automaticamente y compara resultados reales con esperados.

Tipos/herramientas:

- Unitarias: JUnit, TestNG, Jest.
- E2E: Selenium, Cypress, Playwright, Robot Framework, Pytest.

### Performance testing

| Tipo | Que mide |
|---|---|
| Load test | Respuesta ante carga esperada. |
| Stress test | Respuesta ante carga mayor a la esperada. |
| Endurance | Respuesta con carga sostenida por mucho tiempo. |

Herramientas:

- Apache JMeter.
- LoadRunner.
- NeoLoad.
- WebLOAD.

## 19. Accesibilidad

### Herramientas importantes

- Axe.
- Lighthouse.
- WAVE.
- Accessibility Insights.
- Pa11y.

### Trampa

Docker, Docker Swarm y Apache Ant no son herramientas de accesibilidad.

## 20. Dependencias y build tools

### Dependencias

Son librerias, paquetes o modulos externos que una aplicacion necesita.

Gestores:

- npm.
- pip.
- Maven.
- Gradle.
- NuGet.
- Composer.

Archivos relacionados:

- `package.json`.
- `requirements.txt`.
- `pom.xml`.
- `package-lock.json`.
- `poetry.lock`.

### Build tools

Automatizan compilacion, pruebas, empaquetado y preparacion para produccion.

Ejemplos:

- JavaScript/frontend: Webpack, Vite, Gulp.
- Java: Maven, Gradle.
- C/C++: Make, CMake, MSBuild.

## 21. Contenedores, VM y orquestacion

### Maquina virtual

Emula hardware completo y usa su propio sistema operativo.

Ejemplos:

- VMware.
- VirtualBox.
- Qemu.
- Parallels.

### Contenedor

Empaqueta la app con lo necesario y comparte el kernel del sistema anfitrion.

Ejemplos:

- Docker.
- Docker Compose.
- Podman.

### Diferencia clave

| VM | Contenedor |
|---|---|
| Tiene sistema operativo completo propio. | Comparte el kernel del anfitrion. |
| Mas pesada. | Mas liviano y rapido. |
| Aislamiento fuerte. | Ideal para apps portables y microservicios. |

### Orquestacion de contenedores

Automatiza despliegue, escalado, red y administracion de contenedores.

Funciones correctas:

- Despliegue automatico en multiples servidores.
- Escalabilidad: aumentar o reducir contenedores segun trafico.
- Autorreparacion: reiniciar o reemplazar contenedores que fallan.
- Balanceo de carga: repartir trafico entre contenedores.

Ejemplos:

- Kubernetes.
- OpenShift.
- Docker Swarm.
- Amazon ECS.

No marques:

- Formatear codigo fuente.
- Ejecutar pruebas en ambientes productivos.
- Reinicio manual como funcion principal.

## 22. Monitoreo, observabilidad y logging

### Monitoreo

Mide variables conocidas y avisa cuando algo supera un limite.

Ejemplo:

- CPU.
- Memoria.
- Tasa de error.

### Observabilidad

Ayuda a entender por que y como falla algo.

Pilares:

- Metricas.
- Logs.
- Traces.

Herramientas:

- Prometheus.
- Grafana.
- Datadog.
- New Relic.
- OpenTelemetry.

### Logging

Registro de eventos.

Ejemplos:

- ELK Stack.
- Splunk.

## 23. Gestion de API

### Definicion corta

Es crear, publicar, proteger, probar y documentar APIs.

Correcto:

- Diseno.
- Documentacion.
- Seguridad y acceso.
- Analisis.
- Prueba de APIs.

Herramientas:

- Postman.
- Insomnia.
- Swagger/OpenAPI.
- Bruno.

No marques:

- VirtualBox.
- Kubernetes.
- GitLab.

## 24. Seguridad en GitHub

GitHub pide autenticacion segura.

Metodos:

- PAT: Personal Access Token.
- 2FA: autenticacion de dos factores.
- SSH: Secure Shell.

### SSH

Usa dos claves:

- Clave privada: queda en tu computadora.
- Clave publica: se carga en GitHub.

Comando para crear clave:

```bash
ssh-keygen -t rsa -b 4096 -C "tu@email.com"
```

## 25. Configuraciones recomendadas de GitHub

Marca opciones que digan:

- Bloquear push directo a `main` o `master`.
- Permitir merge solo por Pull Request.
- Requerir al menos una aprobacion.
- Requerir que pasen tests/checks de CI.
- Evitar force push en ramas protegidas.
- Requerir branches actualizadas antes de mergear.

## 26. Preguntas nuevas vistas en otro quiz

Estas aparecieron en el video del quiz de otra persona. Son importantes porque muestran otra forma de preguntar: completar espacios, verdadero/falso y relacionar conceptos.

### IDE: relacionar funcionalidad con herramienta

Si aparece una pregunta tipo "Que funcionalidad tienen las herramientas que suele incluir un IDE", las relaciones correctas son:

| Frase | Respuesta |
|---|---|
| Es un procesador de textos orientado para escribir codigo fuente de aplicaciones. | Editor de codigo fuente |
| Traduce del lenguaje de programacion al lenguaje maquina. | Compilador |
| Realiza la traduccion a medida que sea necesaria, instruccion por instruccion. | Interprete |
| Permite probar y eliminar los errores del programa. | Depurador o Debugger |

### README: seleccionar todas las verdaderas

Sobre `README.md`, marca:

- Puede ser una guia rapida de como emplear la aplicacion o libreria.
- Puede contener un manifiesto de archivos.
- Puede contener informacion sobre licencia y desarrollador.
- Se escribe normalmente en Markdown.

No marques:

- Siempre se autogenera desde GitHub.
- No puede versionarse.
- No puede contener imagenes ni tablas.
- Es obligatorio que todo proyecto lo tenga.

Ojo: en las filminas dice que "deberian tenerlo todos los proyectos", pero eso no significa obligatorio tecnico.

### Terminologia Git: completar

| Definicion | Termino |
|---|---|
| Es una foto del proyecto en un tiempo determinado. | Commit |
| Coleccion de todas las referencias, base de datos, objetos y una copia de trabajo. | Repositorio |
| Cadena de 40 bytes que representa una version/commit. | Referencia |

### Alcances de `git config`

Los alcances posibles que aparecieron en filmina son:

- `system`
- `global`
- `local`
- `worktree`
- `portable`

No son alcances:

- `ignore`
- `list`
- `branch`
- `push`
- `pull`
- `user.name`

### Comandos de ramas: completar

| Frase | Comando correcto |
|---|---|
| Con el comando ___ se pueden listar todas las ramas existentes. | `git branch` |
| Con el comando ___ puedo cambiar a otra rama. | `git checkout` |
| Con el comando ___ se puede ver cual es la rama actual. | `git branch` |

Ojo: `git status` puede mostrar informacion de rama en algunos casos, pero en la filmina el comando ensenado para ver ramas/rama actual es `git branch`.

### Code review: verdadero/falso

Frase:

> El code review es una revision de codigo realizada por el mismo GitHub o Bitbucket y NO requiere la intervencion de otros desarrolladores.

Respuesta: Falso.

Por que: el code review lo realiza otro desarrollador/persona revisora. GitHub o Bitbucket son plataformas donde puede ocurrir la revision, pero no reemplazan al revisor.

### VCS/SVC: verdadero/falso

Frase:

> VCS es util solo para gestionar el codigo de proyectos donde este involucrado un conjunto de desarrolladores.

Respuesta: Falso.

Por que: un VCS sirve tambien para una sola persona, para historial, versiones, ramas y volver a estados anteriores. Ademas Git puede versionar codigo y documentos de texto plano.

### CI: verdadero/falso

Frase:

> Los servidores de Integracion Continua se pueden utilizar para ejecutar test automatizados cuando el programador actualiza codigo en el Sistema de gestion de versiones.

Respuesta: Verdadero.

Por que: CI justamente verifica automaticamente cambios mediante tests, builds u otros procesos cuando se integran cambios al repositorio.

## 27. Mapa de herramientas por categoria

Este cuadro es clave para preguntas de memoria.

| Categoria | Herramientas |
|---|---|
| IDE/editor | VSCode, WebStorm, Cursor, Sublime Text, Eclipse, NetBeans |
| VCS | Git, SVN, Mercurial, Bazaar |
| Repositorios | GitHub, GitLab, Bitbucket, Azure Repos |
| Bug tracker | Jira, Bugzilla, Flyspray, Trac, MantisBT |
| Gestion de proyectos | Jira, Trello, Asana, Azure Boards |
| Documentacion proyecto | Confluence, MkDocs, Docusaurus, Notion |
| CI | GitLab CI, Jenkins, GitHub Actions, Azure Pipelines, Travis CI, CircleCI |
| Testing unitario | JUnit, TestNG, Jest |
| Testing E2E | Selenium, Cypress, Playwright, Robot Framework, Pytest |
| Performance | Apache JMeter, LoadRunner, NeoLoad |
| Analisis estatico | SonarQube |
| Dependencias | npm, pip, Maven, Gradle, NuGet, Composer |
| Build tools | Webpack, Vite, Gulp, Maven, Gradle, Make, CMake |
| Contenedores | Docker, Docker Compose, Podman |
| Maquinas virtuales | VMware, VirtualBox, Qemu, Parallels |
| Orquestadores | Kubernetes, OpenShift, Docker Swarm, Amazon ECS |
| Monitoreo/observabilidad | Prometheus, Grafana, Datadog, New Relic, OpenTelemetry |
| Logging | ELK Stack, Splunk |
| API | Postman, Insomnia, Swagger/OpenAPI, Bruno |
| Comunicacion | Slack, Microsoft Teams, Discord |
| Diseno/prototipado | Figma, Adobe XD, Balsamiq |
| Accesibilidad | Axe, Lighthouse, WAVE, Accessibility Insights, Pa11y |
| Seguridad | SonarQube, Snyk, OWASP ZAP, Trivy, Dependabot, Semgrep |

## 28. Trampas muy probables

### Trampa 1: herramienta correcta, categoria incorrecta

- Postman es API, no documentacion del proyecto.
- Kubernetes es orquestacion, no API.
- Docker es contenedores, no accesibilidad.
- Apache Ant es build tool, no accesibilidad.
- GitLab puede ser repositorio o CI, pero no gestion de API.
- VirtualBox es maquina virtual, no API.

### Trampa 2: opciones manuales

Si una opcion dice "manualmente", sospecha.

Ejemplos malos:

- Enviar correos manuales con codigo fuente.
- Reiniciar contenedores manualmente.
- Usuarios modifican codigo manualmente.

### Trampa 3: opciones absolutas

Sospecha de:

- Elimina completamente.
- Siempre.
- Nunca.
- No tiene relacion.

### Trampa 4: confundir analisis estatico con testing

Analisis estatico = revisar codigo sin ejecutar.

Testing = ejecutar pruebas.

Performance = medir respuesta/carga.

## 29. Preguntas estilo quiz con respuestas

### 1. En que consiste la Integracion Continua?

Correctas:

- Practica de integrar cambios de codigo frecuentemente en un repositorio compartido.
- Verificacion automatica de cambios mediante pruebas, builds u otros procesos.
- Permite detectar errores de forma temprana antes del despliegue.
- Se realiza usando servidores propios o servicios cloud.

### 2. Que funcionalidades ofrece un debugger?

Correctas:

- Ejecutar instrucciones o partes de codigo paso a paso.
- Cambiar el punto de ejecucion.
- Detener ejecucion en un breakpoint.
- Examinar y modificar memoria y variables.
- Probar y eliminar errores.

### 3. Cuales son herramientas de documentacion del proyecto?

Correctas:

- Confluence.
- MkDocs.
- Docusaurus.
- Notion.

### 4. Que caracteriza a la Entrega Continua?

Correctas:

- Producir software en ciclos cortos.
- Asegurar que puede liberarse confiablemente en cualquier momento.
- Construccion, prueba y liberacion mas rapida y frecuente.
- Flujo hasta empaquetado y prueba lista para produccion.

### 5. Que acciones permite un VCS?

Correctas:

- Clonar o descargar archivos.
- Editar y guardar cambios localmente.
- Publicar/subir cambios al remoto.
- Consultar historial y volver a versiones anteriores.
- Crear ramas y unificar cambios.

### 6. Buenas practicas al documentar codigo

Correctas:

- Revisar ortografia.
- Mantener comentarios actualizados.
- Dividir comentarios en parrafos.
- Tabular comentarios consecutivos.
- Evitar obviedades.
- No insultar ni poner frases fuera de contexto.
- Documentar mientras se desarrolla.

### 7. Ventajas del analisis estatico

Correctas:

- Revisar codigo sin ejecutar.
- Detectar fallos antes de produccion.
- Identificar vulnerabilidades de seguridad.
- Promover calidad, estilo uniforme y evitar duplicaciones.

### 8. Funciones de un orquestador de contenedores

Correctas:

- Despliegue automatico.
- Escalabilidad.
- Autorreparacion.
- Balanceo de carga.
- Ejemplos: Kubernetes, OpenShift, Docker Swarm, Amazon ECS.

### 9. Herramientas de Gestion de API

Correctas:

- Postman.
- Insomnia.
- Swagger/OpenAPI.
- Bruno.

### 10. Herramientas de accesibilidad

Correctas:

- Axe.
- Lighthouse.
- WAVE.
- Accessibility Insights.
- Pa11y.

## 30. Mini simulacro multiple choice

En este simulacro puede haber mas de una correcta.

### Pregunta 1

Que opciones corresponden a CI?

- A. Integra cambios frecuentemente.
- B. Desactiva pruebas para acelerar entrega.
- C. Verifica automaticamente con pruebas/builds.
- D. Puede usar GitHub Actions o Jenkins.

Respuesta: A, C, D.

### Pregunta 2

Que herramientas corresponden a Gestion de API?

- A. Postman.
- B. VirtualBox.
- C. Swagger/OpenAPI.
- D. Bruno.
- E. Kubernetes.

Respuesta: A, C, D.

### Pregunta 3

Que opciones corresponden a documentacion del proyecto?

- A. Confluence.
- B. MkDocs.
- C. Postman.
- D. Notion.
- E. Docusaurus.

Respuesta: A, B, D, E.

### Pregunta 4

Que hace un debugger?

- A. Pausa en breakpoints.
- B. Traduce todo a codigo maquina final.
- C. Permite revisar variables en ejecucion.
- D. Ejecuta paso a paso.

Respuesta: A, C, D.

### Pregunta 5

Que permite un VCS?

- A. Crear ramas.
- B. Consultar historial.
- C. Volver a versiones anteriores.
- D. Formatear automaticamente el codigo.
- E. Subir cambios al remoto.

Respuesta: A, B, C, E.

### Pregunta 6

Que opciones son de accesibilidad?

- A. Axe.
- B. Docker.
- C. Lighthouse.
- D. WAVE.
- E. Pa11y.

Respuesta: A, C, D, E.

### Pregunta 7

Que hace `.gitignore`?

- A. Define que archivos o carpetas Git debe ignorar.
- B. Sube commits al remoto.
- C. Evita versionar archivos privados o temporales.
- D. Crea un repositorio.

Respuesta: A, C.

### Pregunta 8

Que opciones son funciones de orquestacion?

- A. Despliegue automatico.
- B. Formateo de codigo.
- C. Escalabilidad.
- D. Balanceo de carga.
- E. Autorreparacion.

Respuesta: A, C, D, E.

### Pregunta 9

Que opciones corresponden a analisis estatico?

- A. Revisa codigo sin ejecutar.
- B. Ejecuta pruebas unitarias.
- C. Detecta vulnerabilidades.
- D. Promueve estilo uniforme.

Respuesta: A, C, D.

### Pregunta 10

Que comandos pertenecen al flujo basico de Git?

- A. `git status`.
- B. `git add`.
- C. `git commit`.
- D. `git push`.
- E. `git render`.

Respuesta: A, B, C, D.

## 31. Ultimo repaso antes de entrar

Si tenes 10 minutos, lee solo esto:

- CI: integra cambios frecuentes y verifica automatico.
- CD: software liberable confiablemente en cualquier momento.
- Debugger: breakpoints, paso a paso, variables, memoria, errores.
- VCS: historial, ramas, clone, cambios locales, push, pull.
- GitHub: repositorio remoto, PR, fork, code review.
- Documentacion proyecto: Confluence, MkDocs, Docusaurus, Notion.
- API: Postman, Insomnia, Swagger/OpenAPI, Bruno.
- Accesibilidad: Axe, Lighthouse, WAVE, Accessibility Insights, Pa11y.
- Analisis estatico: codigo sin ejecutar, SonarQube, vulnerabilidades, calidad.
- Orquestacion: Kubernetes/OpenShift/Docker Swarm/Amazon ECS; despliegue, escalado, autorreparacion, balanceo.
- Contenedor vs VM: contenedor comparte kernel; VM tiene sistema operativo propio.
- `.gitignore`: ignora archivos/carpetas.
- README: guia rapida del proyecto.

## 32. Ultimo repaso de preguntas raras

- IDE: editor escribe codigo, compilador traduce a maquina, interprete traduce instruccion por instruccion, debugger prueba/elimina errores.
- README: puede tener guia, manifiesto, licencia/desarrollador; suele escribirse en Markdown.
- `git config`: alcances `system`, `global`, `local`, `worktree`, `portable`.
- Git terminos: commit = foto; repositorio = coleccion completa; referencia = cadena/hash que representa version/commit.
- Ramas: `git branch` lista ramas y muestra actual; `git checkout` cambia de rama; `git merge` fusiona.
- Code review no lo hace automaticamente GitHub/Bitbucket: interviene otra persona revisora.
- VCS no es solo para equipos: tambien sirve para un dev solo.
- CI puede ejecutar tests automaticos al actualizar codigo en el sistema de versionado.
