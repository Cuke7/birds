<template>
  <v-row justify="center" align="start">
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="auto">
          <v-row justify="center">
            <v-col cols="auto">
              <BirdPicture :pictureUrl="photoUrl"></BirdPicture>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto" align-self="center">
          <v-row justify="start">
            <v-col cols="auto" class="purple--text text-h4">
              Martin-pécheur d'Europe</v-col
            >
          </v-row>
          <v-row justify="start">
            <v-col cols="auto" class="grey--text text-body-1 font-weight-bold">
              Alcedo atthis
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-justify text-body-1">
          On entend le martin-pêcheur plus qu'on ne le voit. C'est en général à
          son cri perçant qu'on est averti de sa présence. Le plus souvent, ce qu'on voit de l'oiseau, c'est une
          flèche bleue qui file à toute vitesse au ras de l'eau, de toute la
          puissance de ses petites ailes vibrantes. La couleur bleue des parties
          supérieures se fond dans le ciel clair reflété par la surface de
          l'eau. Il n'est pas facile de le trouver perché dans la végétation,
          immobile, malgré ses couleurs vives. En revanche, quand on sait où il
          se trouve, il suffit d'attendre pour observer son activité de pêche.
          Il se tient à l'affût sur un point haut, la tête et la queue agitées
          de mouvements nerveux. Lorsqu'un poisson est repéré, il quitte son
          perchoir d'un vol oblique rapide, vient percuter le surface pour se
          saisir du poisson et regagne son perchoir.
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    photoUrl: "/kingFisher.jpg",
  }),
};
</script>

<style scoped>
h4 {
  word-break: break-word;
}
</style>
