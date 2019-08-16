exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex("projects_resources").insert([
    {
      project_id: 4,
      resource_id: 3
    },
    {
      project_id: 10,
      resource_id: 7
    },
    {
      project_id: 6,
      resource_id: 9
    },
    {
      project_id: 15,
      resource_id: 1
    },
    {
      project_id: 17,
      resource_id: 10
    },
    {
      project_id: 1,
      resource_id: 4
    },
    {
      project_id: 5,
      resource_id: 6
    },
    {
      project_id: 18,
      resource_id: 9
    },
    {
      project_id: 20,
      resource_id: 6
    },
    {
      project_id: 1,
      resource_id: 4
    },
    {
      project_id: 4,
      resource_id: 10
    },
    {
      project_id: 2,
      resource_id: 6
    },
    {
      project_id: 2,
      resource_id: 4
    },
    {
      project_id: 4,
      resource_id: 10
    },
    {
      project_id: 6,
      resource_id: 3
    },
    {
      project_id: 6,
      resource_id: 1
    },
    {
      project_id: 8,
      resource_id: 5
    },
    {
      project_id: 2,
      resource_id: 6
    },
    {
      project_id: 20,
      resource_id: 2
    },
    {
      project_id: 18,
      resource_id: 6
    },
    {
      project_id: 7,
      resource_id: 9
    },
    {
      project_id: 7,
      resource_id: 5
    },
    {
      project_id: 4,
      resource_id: 5
    },
    {
      project_id: 16,
      resource_id: 4
    },
    {
      project_id: 13,
      resource_id: 10
    },
    {
      project_id: 2,
      resource_id: 3
    },
    {
      project_id: 10,
      resource_id: 1
    },
    {
      project_id: 10,
      resource_id: 4
    },
    {
      project_id: 7,
      resource_id: 8
    },
    {
      project_id: 20,
      resource_id: 4
    },
    {
      project_id: 14,
      resource_id: 9
    },
    {
      project_id: 17,
      resource_id: 5
    },
    {
      project_id: 7,
      resource_id: 3
    },
    {
      project_id: 7,
      resource_id: 1
    },
    {
      project_id: 15,
      resource_id: 9
    },
    {
      project_id: 11,
      resource_id: 9
    },
    {
      project_id: 10,
      resource_id: 4
    },
    {
      project_id: 18,
      resource_id: 4
    },
    {
      project_id: 1,
      resource_id: 10
    },
    {
      project_id: 12,
      resource_id: 9
    },
    {
      project_id: 19,
      resource_id: 2
    },
    {
      project_id: 10,
      resource_id: 7
    },
    {
      project_id: 13,
      resource_id: 4
    },
    {
      project_id: 7,
      resource_id: 4
    },
    {
      project_id: 14,
      resource_id: 7
    },
    {
      project_id: 18,
      resource_id: 9
    },
    {
      project_id: 2,
      resource_id: 2
    },
    {
      project_id: 15,
      resource_id: 9
    },
    {
      project_id: 12,
      resource_id: 6
    },
    {
      project_id: 7,
      resource_id: 1
    }
  ]);
};
