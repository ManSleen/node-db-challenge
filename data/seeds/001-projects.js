exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex("projects").insert([
    {
      name: "Finish Lambda School",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
      completed: false
    },
    {
      name: "Make Backend from Scratch",
      description: "In sagittis dui vel nisl. Duis ac nibh.",
      completed: false
    },
    {
      name: "Paint Bike",
      description: "Mauris lacinia sapien quis libero.",
      completed: false
    },
    {
      name: "Oil Change on Car",
      description:
        "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      completed: false
    },
    {
      name: "Paint a Self-portrait",
      description:
        "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
      completed: false
    },
    {
      name: "Build a PC",
      description:
        "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      completed: true
    },
    {
      name: "Learn Woodworking",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      completed: true
    },
    {
      name: "Take Wife Out to Dinner",
      description:
        "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      completed: true
    },
    {
      name: "Film a Movie",
      description:
        "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
      completed: false
    },
    {
      name: "Fill the Pool",
      description:
        "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
      completed: false
    },
    {
      name: "Clean out Closets",
      description:
        "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
      completed: false
    },
    {
      name: "Donate Used Stuff to Thrift Store",
      description:
        "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
      completed: false
    },
    {
      name: "Research RESTful Databases",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
      completed: false
    },
    {
      name: "Start working on Build Week Project",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
      completed: false
    },
    {
      name: "Make New Design for Labs",
      description:
        "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      completed: false
    },
    {
      name: "Learn Chemistry",
      description: "Nunc rhoncus dui vel sem. Sed sagittis.",
      completed: false
    },
    {
      name: "Go Rock Climbing",
      description:
        "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      completed: false
    },
    {
      name: "Learn Leatherworking",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      completed: false
    },
    {
      name: "Call Your Grandma for Her Birthday",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      completed: false
    },
    {
      name: "Read Books you Forgot About",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      completed: false
    }
  ]);
};
