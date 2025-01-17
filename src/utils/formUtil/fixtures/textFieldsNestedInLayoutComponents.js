export default [
  {
    type: 'textfield',
    key: 'one',
    order: 1,
    input: true,
  },
  {
    input: false,
    key: 'parent1',
    components: [
      {
        type: 'textfield',
        key: 'two',
        order: 2,
      },
      {
        input: false,
        key: 'parent2',
        columns: [
          {
            components: [
              {
                type: 'textfield',
                key: 'three',
                order: 3,
              },
            ],
          },
          {
            components: [
              {
                rows: [
                  [
                    {
                      components: [
                        {
                          key: 'four',
                          order: 4,
                          type: 'textfield',
                        },
                      ],
                    },
                    {
                      components: [
                        {
                          key: 'five',
                          order: 5,
                          type: 'textfield',
                        },
                      ],
                    },
                  ],
                  [
                    {
                      components: [
                        {
                          key: 'six',
                          order: 6,
                          type: 'textfield',
                        },
                      ],
                    },
                    {
                      components: [
                        {
                          key: 'seven',
                          order: 7,
                          type: 'textarea',
                          rows: 3,
                        },
                      ],
                    },
                  ],
                ],
                type: 'table',
              },
            ],
          },
        ],
        type: 'columns',
      },
    ],
    type: 'well',
  },
  {
    key: 'eight',
    order: 8,
    type: 'button',
    input: true,
  },
];
