// ==========================================
// BASE DE DATOS CENTRALIZADA - SISTEMAS CETAL 2026
// ==========================================

const CETAL_DB = {
  config: {
    startDate: "2026-02-18", // Inicio de clases
    totalSurvivors: 45,      // Total de estudiantes activos registrados
    casualties: [
      { name: "Luis", status: "Baja registrada / Retirado oficial del turno" }
    ]
  },

  projects: [
    {
      title: "Universal Backup System",
      description: "Sincronización segura Rclone y cifrado AES a la nube (Por Ivan).",
      status: "En Proceso (75%)"
    },
    {
      title: "Antivirus ClamAV CLI Portable",
      description: "Motor de seguridad de consola para unidades portables USB (Por Ivan).",
      status: "Completado ?"
    },
    {
      title: "Plataforma Web Promoción CETAL",
      description: "Portal web institucional con estética Cyber y terminal interactiva.",
      status: "Operativo ?"
    }
  ],

  bitacora: [
    { date: "20 Sept 2026", title: "Exposición de Redes Cisco", desc: "Configuración de VLANs y subredes en laboratorio." },
    { date: "14 Sept 2026", title: "Mantenimiento DVR", desc: "Calibración de cámaras de seguridad en el piso 5to." }
  ],

  // Listado oficial de los 45 estudiantes extraído de la Base de Datos CETAL
  students: [
    {
      name: "Abad Charles Marquez Flores",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1994-12-19",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Encuadernación",
      repo: "Script-Abad.sh"
    },
    {
      name: "Abel Chino Tarqui",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1995-12-21",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Empleado dependiente de una empresa",
      repo: "Script-Abel.sh"
    },
    {
      name: "Abiv Ezequiel Choque Limachi",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2007-05-25",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Electricista",
      repo: "Script-Abiv.sh"
    },
    {
      name: "Alex Benito Mayta",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1994-04-13",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Alex.sh"
    },
    {
      name: "Alexis Damian Calle Sullca",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2009-12-18",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Alexis.sh"
    },
    {
      name: "Bayron Efrain Luna Chuquimia",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2010-02-02",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "No tengo trabajo",
      repo: "Script-Bayron.sh"
    },
    {
      name: "Betsaida Elva Calle Condori",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1989-03-04",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Empleada",
      repo: "Script-Betsaida.sh"
    },
    {
      name: "Brenda Johaneth Huanca Callisaya",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2004-05-28",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Brenda.sh"
    },
    {
      name: "Bryan Gutierrez Quisbert",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2002-04-01",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Bryan.sh"
    },
    {
      name: "Camil Aymar Calle Chura",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2008-06-21",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Camil.sh"
    },
    {
      name: "Daniel Cussy Mercado",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1986-01-08",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Daniel.sh"
    },
    {
      name: "Diego Franco Apaza Conde",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1997-09-11",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Diego.sh"
    },
    {
      name: "Dilan Jhoel Laruta Cordoba",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2006-04-05",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Dilan.sh"
    },
    {
      name: "Edwin Omar Vallejos Vilela",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1977-09-02",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Edwin.sh"
    },
    {
      name: "Efrain Cumali alvarado",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1974-11-29",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Obrero de construccion",
      repo: "Script-Efrain.sh"
    },
    {
      name: "Efrain Vargas Choque",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1998-04-26",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "ESTUDIANTE",
      repo: "Script-EfrainV.sh"
    },
    {
      name: "Elmer Ruben Vargas Rivas",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2003-05-12",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Elmer.sh"
    },
    {
      name: "Fernando Jose Mamani Valencia",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2008-04-04",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Fernando.sh"
    },
    {
      name: "Gabriel Elias Quispe Mamani",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1999-07-14",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Gabriel.sh"
    },
    {
      name: "Grissel Salluca Castañeta",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1994-02-08",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante UMSA",
      repo: "Script-Grissel.sh"
    },
    {
      name: "Helen Candelaria Villlca Patzi",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "2009-01-05",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Helen.sh"
    },
    {
      name: "Ivan Grover Paz Mancilla",
      roleTag: "PRESIDENTE DEL ESTADO ESTUDIANTIL",
      gender: "m",
      bday: "1993-10-18",
      desc: "Liderazgo, desarrollo de scripts y automatización.",
      occ: "Independiente",
      repo: "Rclone-Backup-Drive.bat"
    },
    {
      name: "Ivan Quispe Choquehuanca",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2002-12-23",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Mecanica",
      repo: "Script-IvanQ.sh"
    },
    {
      name: "Jadilson Huanca Bautista",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2007-08-06",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Carpintero y Albañil",
      repo: "Script-Jadilson.sh"
    },
    {
      name: "Jael Ruth Ramos Nina",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1994-03-07",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Jael.sh"
    },
    {
      name: "Jeans Jhunior Condori Apaza",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2003-11-21",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Jeans.sh"
    },
    {
      name: "Jesús Reynaldo Troche Chura",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1991-06-22",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Enfermero . Crew",
      repo: "Script-Jesus.sh"
    },
    {
      name: "Jhenny Beatriz Condori Castillo",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1995-11-25",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Cuido de persona de la tercera edad",
      repo: "Script-Jhenny.sh"
    },
    {
      name: "Jimena Mamani Mamani",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1989-08-08",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-JimenaM.sh"
    },
    {
      name: "Jordan Arteaga Calle",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2001-10-19",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Jordan.sh"
    },
    {
      name: "Linda Adai Saavedra Callizaya",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "2000-11-24",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Linda.sh"
    },
    {
      name: "Luis Alejandro Catacora Laime",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1994-04-29",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-LuisC.sh"
    },
    {
      name: "Luis Beltran Yujra Huallpa",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1994-10-08",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-LuisY.sh"
    },
    {
      name: "Maria Eugenia Gutierrez Hilaya",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1985-08-14",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Maria.sh"
    },
    {
      name: "Marilyn Tonconi Apaza",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1992-10-25",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Marilyn.sh"
    },
    {
      name: "Miguel Armin Huanca Siñani",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2007-11-20",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante/comerciante",
      repo: "Script-Miguel.sh"
    },
    {
      name: "Mijhael Jeremy Mamani Geronimo",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2003-07-31",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Mijhael.sh"
    },
    {
      name: "Pedro Daniel Mamani Alvarado",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2007-12-31",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Pedro.sh"
    },
    {
      name: "Ruth Noemi Ramos Cruz",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "2002-01-26",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Ruth.sh"
    },
    {
      name: "Samuel Ariel Mamani poma",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "1995-02-10",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Tec superior en redes y sistemas",
      repo: "Script-Samuel.sh"
    },
    {
      name: "Sebastian Kyoshi Villalva Poma",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2026-07-03",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "estudiando",
      repo: "Script-Sebastian.sh"
    },
    {
      name: "Subeida Jimena Mamani Huanca",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1993-01-08",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Nn",
      repo: "Script-Subeida.sh"
    },
    {
      name: "Wendy Belen Quisbert Medina",
      roleTag: "ESTUDIANTE CETAL",
      gender: "f",
      bday: "1994-06-23",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Wendy.sh"
    },
    {
      name: "Wicle Poma Callisaya",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2026-09-14",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante",
      repo: "Script-Wicle.sh"
    },
    {
      name: "Yhamil Leonardo Limachi Blanco",
      roleTag: "ESTUDIANTE CETAL",
      gender: "m",
      bday: "2006-11-19",
      desc: "Desarrollo de software y redes CETAL.",
      occ: "Estudiante CETAL",
      repo: "Script-Yhamil.sh"
    }
  ]
};