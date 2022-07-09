exports['mcdoc __fixture__ type parameter/identity 1'] = {
  "global": {
    "mcdoc": {
      "::test": {
        "subcategory": "module",
        "definition": [
          {
            "uri": "file:///test.mcdoc",
            "range": {
              "start": 0,
              "end": 0
            },
            "posRange": {
              "start": {
                "line": 0,
                "character": 0
              },
              "end": {
                "line": 0,
                "character": 0
              }
            },
            "contributor": "uri_binder"
          }
        ],
        "data": {
          "nextAnonymousIndex": 0
        }
      },
      "::test::Test": {
        "data": {
          "typeDef": {
            "kind": "reference",
            "path": "::test::T"
          },
          "typeParams": [
            {
              "identifier": "T"
            }
          ]
        },
        "desc": "",
        "subcategory": "type_alias",
        "definition": [
          {
            "uri": "file:///test.mcdoc",
            "range": {
              "start": 5,
              "end": 9
            },
            "posRange": {
              "start": {
                "line": 0,
                "character": 5
              },
              "end": {
                "line": 0,
                "character": 9
              }
            },
            "fullRange": {
              "start": 0,
              "end": 16
            },
            "fullPosRange": {
              "start": {
                "line": 0,
                "character": 0
              },
              "end": {
                "line": 0,
                "character": 16
              }
            },
            "contributor": "binder"
          }
        ]
      }
    }
  },
  "nodes": {
    "file:///test.mcdoc": {
      "type": "file",
      "range": {
        "start": 0,
        "end": 16
      },
      "children": [
        {
          "type": "mcdoc:module",
          "children": [
            {
              "type": "mcdoc:type_alias",
              "children": [
                {
                  "type": "mcdoc:doc_comments",
                  "children": [],
                  "range": {
                    "start": 0,
                    "end": 0
                  }
                },
                {
                  "type": "mcdoc:literal",
                  "range": {
                    "start": 0,
                    "end": 4
                  },
                  "value": "type",
                  "colorTokenType": "keyword"
                },
                {
                  "type": "mcdoc:identifier",
                  "range": {
                    "start": 5,
                    "end": 9
                  },
                  "value": "Test",
                  "symbol": {
                    "category": "mcdoc",
                    "path": [
                      "::test::Test"
                    ]
                  }
                },
                {
                  "type": "mcdoc:type_param_block",
                  "children": [
                    {
                      "type": "mcdoc:type_param",
                      "children": [
                        {
                          "type": "mcdoc:identifier",
                          "range": {
                            "start": 10,
                            "end": 11
                          },
                          "value": "T",
                          "symbol": {
                            "category": "mcdoc",
                            "path": [
                              "::test::T"
                            ]
                          }
                        }
                      ],
                      "range": {
                        "start": 10,
                        "end": 11
                      }
                    }
                  ],
                  "range": {
                    "start": 9,
                    "end": 13
                  }
                },
                {
                  "type": "mcdoc:type/reference",
                  "children": [
                    {
                      "type": "mcdoc:path",
                      "children": [
                        {
                          "type": "mcdoc:identifier",
                          "range": {
                            "start": 15,
                            "end": 16
                          },
                          "value": "T",
                          "symbol": {
                            "category": "mcdoc",
                            "path": [
                              "::test::T"
                            ]
                          }
                        }
                      ],
                      "range": {
                        "start": 15,
                        "end": 16
                      }
                    }
                  ],
                  "range": {
                    "start": 15,
                    "end": 16
                  }
                }
              ],
              "range": {
                "start": 0,
                "end": 16
              },
              "locals": {
                "mcdoc": {
                  "::test::T": {
                    "category": "mcdoc",
                    "identifier": "::test::T",
                    "path": [
                      "::test::T"
                    ],
                    "visibility": 0,
                    "declaration": [
                      {
                        "uri": "file:///test.mcdoc",
                        "range": {
                          "start": 10,
                          "end": 11
                        },
                        "posRange": {
                          "start": {
                            "line": 0,
                            "character": 10
                          },
                          "end": {
                            "line": 0,
                            "character": 11
                          }
                        },
                        "fullRange": {
                          "start": 10,
                          "end": 11
                        },
                        "fullPosRange": {
                          "start": {
                            "line": 0,
                            "character": 10
                          },
                          "end": {
                            "line": 0,
                            "character": 11
                          }
                        },
                        "contributor": "binder"
                      }
                    ],
                    "reference": [
                      {
                        "uri": "file:///test.mcdoc",
                        "range": {
                          "start": 15,
                          "end": 16
                        },
                        "posRange": {
                          "start": {
                            "line": 0,
                            "character": 15
                          },
                          "end": {
                            "line": 0,
                            "character": 16
                          }
                        },
                        "fullRange": {
                          "start": 15,
                          "end": 16
                        },
                        "fullPosRange": {
                          "start": {
                            "line": 0,
                            "character": 15
                          },
                          "end": {
                            "line": 0,
                            "character": 16
                          }
                        },
                        "contributor": "binder",
                        "skipRenaming": false
                      }
                    ]
                  }
                }
              }
            }
          ],
          "range": {
            "start": 0,
            "end": 16
          }
        }
      ],
      "locals": {},
      "parserErrors": [],
      "binderErrors": []
    }
  }
}
