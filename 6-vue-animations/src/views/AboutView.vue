<template>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
      <p>
        Hoy, en el Día Mundial del Ciclismo, te invitamos a explorar Holanda en
        bicicleta. Descubra rutas con vistas panorámicas y a través de ciudades
        bulliciosas. Tanto si pisas los pedales de vez en cuando como si eres un
        ciclista experimentado, hay algo para todos los gustos. ¡Alquila un
        OV-fiets y lánzate a la aventura!
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.container {
  max-width: 512px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
h1 {
  text-align: center;
}
p {
  text-align: center;
}
</style>
