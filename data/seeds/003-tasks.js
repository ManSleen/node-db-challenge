exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex("tasks").insert([
    {
      project_id: 3,
      description:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      notes:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
      completed: false
    },
    {
      project_id: 1,
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
      notes:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      completed: false
    },
    {
      project_id: 11,
      description: "Vestibulum sed magna at nunc commodo placerat.",
      notes: "Nam dui.",
      completed: false
    },
    {
      project_id: 14,
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
      notes:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
      completed: true
    },
    {
      project_id: 14,
      description:
        "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
      notes:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      completed: false
    },
    {
      project_id: 20,
      description:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
      notes:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      completed: false
    },
    {
      project_id: 1,
      description: "Donec quis orci eget orci vehicula condimentum.",
      notes:
        "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
      completed: true
    },
    {
      project_id: 2,
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
      notes:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      completed: true
    },
    {
      project_id: 13,
      description: "Proin risus.",
      notes:
        "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
      completed: false
    },
    {
      project_id: 9,
      description: "Integer ac leo. Pellentesque ultrices mattis odio.",
      notes:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      completed: false
    },
    {
      project_id: 1,
      description: "Donec ut mauris eget massa tempor convallis.",
      notes: "Vivamus tortor. Duis mattis egestas metus.",
      completed: false
    },
    {
      project_id: 7,
      description: "Etiam justo. Etiam pretium iaculis justo.",
      notes:
        "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
      completed: true
    },
    {
      project_id: 19,
      description:
        "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      notes:
        "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
      completed: false
    },
    {
      project_id: 16,
      description: "Aliquam non mauris.",
      notes:
        "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      completed: false
    },
    {
      project_id: 17,
      description: "Ut tellus.",
      notes: "Duis consequat dui nec nisi volutpat eleifend.",
      completed: true
    },
    {
      project_id: 13,
      description: "Sed vel enim sit amet nunc viverra dapibus.",
      notes:
        "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      completed: true
    },
    {
      project_id: 17,
      description: "In hac habitasse platea dictumst.",
      notes:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      completed: true
    },
    {
      project_id: 15,
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      notes:
        "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      completed: true
    },
    {
      project_id: 14,
      description:
        "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      notes:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
      completed: true
    },
    {
      project_id: 4,
      description: "In hac habitasse platea dictumst.",
      notes:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      completed: false
    },
    {
      project_id: 6,
      description: "Mauris lacinia sapien quis libero.",
      notes:
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      completed: true
    },
    {
      project_id: 14,
      description:
        "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
      notes:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      completed: false
    },
    {
      project_id: 20,
      description: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
      notes:
        "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
      completed: true
    },
    {
      project_id: 1,
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
      notes:
        "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
      completed: false
    },
    {
      project_id: 19,
      description:
        "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      notes:
        "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
      completed: true
    },
    {
      project_id: 1,
      description:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      notes:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      completed: true
    },
    {
      project_id: 12,
      description: "In quis justo. Maecenas rhoncus aliquam lacus.",
      notes: "Aenean sit amet justo.",
      completed: false
    },
    {
      project_id: 12,
      description:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
      notes:
        "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
      completed: false
    },
    {
      project_id: 14,
      description:
        "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      notes:
        "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      completed: false
    },
    {
      project_id: 3,
      description: "Morbi porttitor lorem id ligula.",
      notes: "Donec posuere metus vitae ipsum.",
      completed: true
    },
    {
      project_id: 3,
      description: "Vivamus vel nulla eget eros elementum pellentesque.",
      notes: "Phasellus in felis. Donec semper sapien a libero.",
      completed: true
    },
    {
      project_id: 7,
      description:
        "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      notes:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
      completed: true
    },
    {
      project_id: 12,
      description:
        "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      notes:
        "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
      completed: true
    },
    {
      project_id: 9,
      description:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
      notes:
        "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      completed: false
    },
    {
      project_id: 7,
      description:
        "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
      notes:
        "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
      completed: true
    },
    {
      project_id: 6,
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
      notes:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      completed: false
    },
    {
      project_id: 3,
      description: "Donec semper sapien a libero. Nam dui.",
      notes:
        "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      completed: true
    },
    {
      project_id: 4,
      description: "Curabitur in libero ut massa volutpat convallis.",
      notes:
        "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
      completed: false
    },
    {
      project_id: 15,
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
      notes:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
      completed: true
    },
    {
      project_id: 11,
      description: "Integer a nibh. In quis justo.",
      notes:
        "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
      completed: true
    },
    {
      project_id: 17,
      description: "Pellentesque at nulla. Suspendisse potenti.",
      notes:
        "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      completed: true
    },
    {
      project_id: 11,
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
      notes:
        "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
      completed: true
    },
    {
      project_id: 20,
      description:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
      notes:
        "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      completed: false
    },
    {
      project_id: 4,
      description: "Cras non velit nec nisi vulputate nonummy.",
      notes: "Donec posuere metus vitae ipsum.",
      completed: false
    },
    {
      project_id: 7,
      description: "Suspendisse potenti.",
      notes:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      completed: true
    },
    {
      project_id: 11,
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      notes:
        "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      completed: false
    },
    {
      project_id: 11,
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      notes:
        "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      completed: false
    },
    {
      project_id: 11,
      description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
      notes:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
      completed: true
    },
    {
      project_id: 16,
      description: "Vivamus vestibulum sagittis sapien.",
      notes: "Phasellus in felis. Donec semper sapien a libero.",
      completed: true
    },
    {
      project_id: 5,
      description:
        "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      notes:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
      completed: false
    }
  ]);
};
