exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex("resources").insert([
    {
      name: "Manouria emys",
      description: "Proin risus."
    },
    {
      name: "Ara macao"
    },
    {
      name: "Zonotrichia capensis",
      description:
        "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
    },
    {
      name: "Lutra canadensis",
      description:
        "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem."
    },
    {
      name: "Carphophis sp.",
      description:
        "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam."
    },
    {
      name: "Gyps fulvus",
      description:
        "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
    },
    {
      name: "Ardea cinerea",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit."
    },
    {
      name: "Rhea americana"
    },
    {
      name: "Corythornis cristata",
      description:
        "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum."
    },
    {
      name: "Michaelis VanSleenicus"
    }
  ]);
};
