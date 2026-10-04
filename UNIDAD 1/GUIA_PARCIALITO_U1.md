# Guia Parcialito Unidad 1

Material basado en:

- `U1_herramientas.html`
- `U1_git.html`
- `U1_git_avanzado.html`
- consignas de Unidad 1 del README general

## 1. Que entra

La Unidad 1 mezcla dos bloques grandes:

- Herramientas de desarrollo: que son, para que sirven y ejemplos.
- Git/GitHub: conceptos, estados, comandos, ramas, pull request, README, `.gitignore` y seguridad.

Si el parcialito es multiple choice, espera preguntas del tipo "cual herramienta corresponde a...", "que comando hace...", "cual es la diferencia entre..." y "que pasa si...".

## 2. Herramientas de desarrollo

Una herramienta de desarrollo es un recurso que facilita el desarrollo, mantenimiento, prueba, despliegue o monitoreo del software.

Conceptos clave:

- IDE: entorno que integra editor, compilador/interprete, herramientas de construccion y depurador.
- Editor de codigo: programa especializado para escribir codigo, con resaltado de sintaxis y ayudas.
- Debugger: permite pausar el programa, inspeccionar variables, memoria y ejecutar paso a paso.
- Compilador: traduce codigo fuente a lenguaje maquina, codigo intermedio o texto antes de ejecutar.
- Interprete: traduce y ejecuta instruccion por instruccion.
- Linter: analiza codigo sin ejecutarlo para detectar errores, estilo o malas practicas. En JavaScript se usa mucho ESLint.
- Prettier: formateador de codigo; ordena estilo automaticamente.
- VCS: sistema de control de versiones. Permite guardar historial, trabajar en ramas y colaborar.
- Repositorio de codigo: lugar donde se almacenan y administran archivos de un proyecto. Ejemplos: GitHub, GitLab, Bitbucket, Azure Repos.
- Bug tracker: registra, clasifica, asigna y resuelve errores. Ejemplos: Jira, Bugzilla.
- Gestion de proyectos: organiza tareas y seguimiento. Ejemplos: Jira, Trello, Asana.
- Documentacion: puede ser del proyecto o del codigo.
- Integracion continua: integra cambios frecuentemente y los verifica con pruebas, builds u otros procesos automaticos.
- Entrega continua: permite liberar software de forma confiable y frecuente.
- Automatizacion de pruebas: ejecuta validaciones automaticamente.
- Performance testing: mide rendimiento. Load test usa carga esperada; stress test supera la carga esperada; endurance mantiene carga durante tiempo prolongado.
- Analisis estatico: revisa codigo sin ejecutarlo. Ejemplo: SonarQube.
- Dependencias: librerias o paquetes externos que necesita la app. Ejemplos de gestores: npm, pip, Maven.
- Build tools: automatizan compilacion, pruebas, empaquetado y gestion de dependencias. Ejemplos: Vite, Webpack, Maven, Gradle.
- Contenedores: empaquetan app y dependencias compartiendo el kernel del sistema anfitrion. Ejemplo: Docker.
- Maquinas virtuales: emulan hardware y tienen sistema operativo propio.
- Orquestacion: automatiza despliegue, escalado y administracion de contenedores. Ejemplo: Kubernetes.
- Monitoreo: avisa que y cuando falla.
- Observabilidad: ayuda a entender por que y como falla. Pilares: metricas, logs y traces.
- Logging: registro de eventos. Ejemplos: ELK Stack, Splunk.
- Gestion de API: diseno, documentacion, seguridad y analisis de APIs. Ejemplos: Postman, Insomnia, Swagger/OpenAPI.

## 3. Git esencial

Git es un sistema distribuido de control de versiones, libre, creado por Linus Torvalds en 2005 para el kernel de Linux.

Ideas clave:

- Cada clon es un repositorio completo.
- Un commit es una "foto" del proyecto en un momento.
- Git permite historial, ramas, merge, colaboracion y volver a versiones anteriores.
- Git no esta optimizado para videos pesados, instaladores o binarios grandes.

Estados:

- Untracked: archivo sin seguimiento de Git.
- Modified: archivo modificado, pero no confirmado.
- Staged/index: archivo preparado con `git add` para el proximo commit.
- Unmodified: archivo guardado sin cambios respecto al repositorio.

## 4. Comandos que tenes que saber si o si

| Comando | Para que sirve |
|---|---|
| `git --version` | Verifica la instalacion de Git. |
| `git config --global user.name "Nombre"` | Configura nombre de usuario global. |
| `git config --global user.email mail@dominio.com` | Configura email global. |
| `git config --list` | Muestra configuracion actual. |
| `git init` | Crea un repositorio Git local. |
| `git clone URL` | Copia un repositorio remoto a la computadora. |
| `git status` | Muestra archivos modificados, staged o untracked. |
| `git add archivo` | Agrega un archivo al area de staging. |
| `git add .` | Agrega todos los cambios al staging. Usarlo con cuidado. |
| `git commit -m "mensaje"` | Guarda cambios en el repositorio local. |
| `git push` | Sube commits al repositorio remoto. |
| `git pull` | Trae cambios del remoto al local. |
| `git log` | Muestra historial de commits. |
| `git diff` | Muestra diferencias respecto al ultimo commit. |
| `git branch` | Muestra ramas o crea una rama si se pasa un nombre. |
| `git checkout rama` | Cambia de rama. |
| `git merge rama` | Fusiona una rama con la rama actual. |
| `git remote -v` | Muestra las URL remotas configuradas. |
| `git remote set-url origin URL` | Cambia la URL del remoto origin. |

Flujo basico:

1. `git clone URL`
2. modificar archivos
3. `git status`
4. `git add archivo`
5. `git commit -m "mensaje"`
6. `git push`

La filmina remarca como mas importantes: `git clone`, `git status`, `git add`, `git commit`, `git push`.

## 5. Git parte II

Comandos y conceptos avanzados que pueden aparecer:

- `git reset archivo`: saca un archivo del staging, pero conserva los cambios en el archivo.
- `git stash`: guarda cambios no commiteados y limpia el directorio de trabajo.
- `git stash apply`: recupera los cambios guardados.
- `git checkout id-commit`: permite ir a un commit especifico.
- `git reset --soft HEAD~1`: elimina el ultimo commit local, pero mantiene los cambios.
- `git reset --hard HEAD~1`: elimina el ultimo commit local y tambien descarta los cambios.
- `git commit --amend -m "mensaje"`: modifica el ultimo commit si todavia no se hizo push.
- `git revert id-commit`: revierte un commit ya pusheado creando un nuevo commit inverso.
- `git rebase rama`: cambia el punto de partida de una rama para mantener historial lineal.

Diferencia importante:

- `reset` reescribe o mueve historial local.
- `revert` no borra historial; agrega un commit que deshace otro commit.

## 6. GitHub y trabajo colaborativo

- GitHub es un servidor/repositorio remoto de codigo.
- GitHub Classroom permite al docente crear y revisar repositorios de estudiantes.
- Branch significa rama: permite trabajar en paralelo.
- `main` o `master` suele ser la rama principal estable.
- Las ramas pueden usarse para features, developers o hotfixes.
- Fork: copia un repositorio ajeno para modificarlo sin afectar el original.
- Pull request: solicitud para incorporar cambios de una rama o fork a otra rama/repositorio.
- Code review: revision del codigo antes de mergear.

Buenas configuraciones de GitHub:

- Bloquear push directo a `main/master`.
- Requerir pull request antes de mergear.
- Pedir al menos una aprobacion.
- Requerir tests o checks de CI.
- Evitar force push en ramas protegidas.
- Exigir ramas actualizadas antes de mergear.

## 7. Seguridad

GitHub exige autenticacion segura:

- PAT: Personal Access Token. Se usa como password para operaciones Git cuando corresponde.
- 2FA: autenticacion de dos factores.
- SSH: autenticacion mediante clave privada y publica.

SSH:

- La clave privada queda en tu computadora.
- La clave publica se carga en GitHub.
- Sirve para autenticarse sin escribir contrasena cada vez.

## 8. README, Markdown y gitignore

README:

- Es la guia rapida del proyecto.
- Puede incluir descripcion, instalacion, uso, licencia, autores, bugs conocidos y cambios.
- Se escribe frecuentemente en Markdown.

Markdown:

- Permite dar formato con texto simple.
- `#` crea titulos.
- `**texto**` crea negrita.
- `*texto*` crea cursiva.
- `- item` crea listas.
- `[texto](url)` crea links.

`.gitignore`:

- Indica a Git que archivos o carpetas debe ignorar.
- Sirve para no subir archivos privados, pesados, temporales, dependencias o binarios innecesarios.

## 9. Preguntas multiple choice de practica

1. Que es Git?
   - A. Un lenguaje de programacion
   - B. Un sistema distribuido de control de versiones
   - C. Un editor de codigo
   - D. Un servidor web

2. Que comando muestra los archivos modificados?
   - A. `git status`
   - B. `git add`
   - C. `git push`
   - D. `git init`

3. Que hace `git add`?
   - A. Sube cambios a GitHub
   - B. Prepara cambios para el proximo commit
   - C. Crea una rama remota
   - D. Borra el historial

4. Que hace `git commit -m "mensaje"`?
   - A. Guarda cambios en el repositorio local
   - B. Trae cambios del remoto
   - C. Instala Git
   - D. Cambia el email de Git

5. Que hace `git push`?
   - A. Trae cambios del remoto
   - B. Sube commits al remoto
   - C. Crea un archivo HTML
   - D. Lista ramas

6. Que hace `git pull`?
   - A. Trae cambios del remoto al local
   - B. Crea un commit
   - C. Ignora archivos
   - D. Ejecuta tests

7. Que es un commit?
   - A. Una extension de VSCode
   - B. Una foto/version del proyecto en un momento
   - C. Un tipo de rama
   - D. Un error del navegador

8. Cual es la diferencia entre compilador e interprete?
   - A. El compilador traduce antes; el interprete traduce mientras ejecuta
   - B. Son exactamente lo mismo
   - C. El interprete siempre genera ejecutables
   - D. El compilador solo existe en JavaScript

9. Cual es un ejemplo de repositorio de codigo?
   - A. GitHub
   - B. Prettier
   - C. ESLint
   - D. Docker

10. Para que sirve un linter?
    - A. Para detectar problemas de codigo sin ejecutarlo
    - B. Para subir commits
    - C. Para crear maquinas virtuales
    - D. Para disenar prototipos

11. Para que sirve Prettier?
    - A. Para formatear codigo
    - B. Para crear repositorios
    - C. Para hacer merge
    - D. Para crear claves SSH

12. Que comando crea un repositorio Git local?
    - A. `git init`
    - B. `git clone`
    - C. `git push`
    - D. `git log`

13. Que comando copia un repositorio remoto?
    - A. `git clone URL`
    - B. `git add URL`
    - C. `git status URL`
    - D. `git merge URL`

14. Que hace `git branch` sin parametros?
    - A. Muestra ramas
    - B. Crea un commit
    - C. Borra archivos ignorados
    - D. Sube cambios

15. Que hace `git checkout nombre-rama`?
    - A. Cambia de rama
    - B. Crea un token
    - C. Instala dependencias
    - D. Ejecuta el proyecto

16. Que hace `git merge develop` estando en `main`?
    - A. Fusiona `develop` en `main`
    - B. Borra `main`
    - C. Cambia la URL remota
    - D. Crea una clave publica

17. Que es un fork?
    - A. Una copia de un repositorio para trabajar sin afectar el original
    - B. Un error de compilacion
    - C. Un archivo ignorado
    - D. Un tipo de CSS

18. Que es un pull request?
    - A. Una solicitud para incorporar cambios
    - B. Una forma de instalar Git
    - C. Una etiqueta HTML
    - D. Un formateador de codigo

19. Que hace `git reset archivo`?
    - A. Quita el archivo del staging, conservando cambios
    - B. Sube el archivo al remoto
    - C. Crea una rama
    - D. Genera un README

20. Que hace `git stash`?
    - A. Guarda cambios no confirmados y limpia el directorio de trabajo
    - B. Borra GitHub
    - C. Crea una tabla Markdown
    - D. Revisa accesibilidad

21. Cuando conviene `git revert`?
    - A. Cuando el commit ya fue pusheado y se quiere deshacer sin borrar historial
    - B. Solo antes del primer commit
    - C. Para instalar dependencias
    - D. Para cambiar nombre de usuario

22. Que archivo indica a Git que no debe subir ciertos archivos?
    - A. `.gitignore`
    - B. `README.md`
    - C. `index.html`
    - D. `package.json`

23. Que es un README?
    - A. Una guia rapida del proyecto
    - B. Un comando de Git
    - C. Un bug tracker
    - D. Una clave SSH

24. Cual es un ejemplo de herramienta de CI?
    - A. GitHub Actions
    - B. Markdown
    - C. `git diff`
    - D. README

25. Diferencia entre contenedor y maquina virtual:
    - A. El contenedor comparte kernel; la VM tiene sistema operativo propio
    - B. La VM siempre es mas liviana
    - C. El contenedor solo sirve para imagenes
    - D. No hay diferencia

26. Que herramienta se asocia con orquestacion de contenedores?
    - A. Kubernetes
    - B. Prettier
    - C. GitLens
    - D. Markdown

27. Que significa observabilidad?
    - A. Entender por que y como falla un sistema
    - B. Guardar commits
    - C. Ignorar archivos
    - D. Dibujar prototipos

28. Que herramienta sirve para probar o documentar APIs?
    - A. Swagger/OpenAPI
    - B. Git commit
    - C. `.gitignore`
    - D. WebStorm solamente

29. Que es SSH en GitHub?
    - A. Un metodo de autenticacion con clave publica y privada
    - B. Un formateador
    - C. Un bug tracker
    - D. Una rama principal

30. Que comando muestra diferencias con respecto al ultimo commit?
    - A. `git diff`
    - B. `git push`
    - C. `git init`
    - D. `git config --list`

## 10. Respuestas

1 B, 2 A, 3 B, 4 A, 5 B, 6 A, 7 B, 8 A, 9 A, 10 A, 11 A, 12 A, 13 A, 14 A, 15 A, 16 A, 17 A, 18 A, 19 A, 20 A, 21 A, 22 A, 23 A, 24 A, 25 A, 26 A, 27 A, 28 A, 29 A, 30 A.

## 11. Repaso en 10 minutos antes de rendir

- Git: `clone`, `status`, `add`, `commit`, `push`, `pull`, `log`, `diff`.
- Estados: untracked, modified, staged, unmodified.
- Ramas: `branch`, `checkout`, `merge`.
- Deshacer: `reset` local, `revert` cuando ya se pusheo.
- GitHub: fork, pull request, code review, branch protection.
- Herramientas: IDE, VCS, bug tracker, CI/CD, testing, linter, formatter, contenedores, APIs.
- Seguridad: PAT, 2FA, SSH.
- Archivos: `README.md` explica el proyecto; `.gitignore` evita versionar archivos no deseados.
