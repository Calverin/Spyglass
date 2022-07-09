exports['mcdoc __fixture__ type parameter/duplicated parameters 1'] = {
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
          }
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
              "end": 19
            },
            "fullPosRange": {
              "start": {
                "line": 0,
                "character": 0
              },
              "end": {
                "line": 0,
                "character": 19
              }
            },
            "contributor": "binder"
          }
        ],
        "members": {
          "T": {
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
            ]
          }
        }
      }
    }
  },
  "nodes": {
    "file:///test.mcdoc": {
      "type": "file",
      "range": {
        "start": 0,
        "end": 19
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
                    },
                    {
                      "type": "mcdoc:type_param",
                      "children": [
                        {
                          "type": "mcdoc:identifier",
                          "range": {
                            "start": 13,
                            "end": 14
                          },
                          "value": "T"
                        }
                      ],
                      "range": {
                        "start": 13,
                        "end": 14
                      }
                    }
                  ],
                  "range": {
                    "start": 9,
                    "end": 16
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
                            "start": 18,
                            "end": 19
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
                        "start": 18,
                        "end": 19
                      }
                    }
                  ],
                  "range": {
                    "start": 18,
                    "end": 19
                  }
                }
              ],
              "range": {
                "start": 0,
                "end": 19
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
                          "start": 18,
                          "end": 19
                        },
                        "posRange": {
                          "start": {
                            "line": 0,
                            "character": 18
                          },
                          "end": {
                            "line": 0,
                            "character": 19
                          }
                        },
                        "fullRange": {
                          "start": 18,
                          "end": 19
                        },
                        "fullPosRange": {
                          "start": {
                            "line": 0,
                            "character": 18
                          },
                          "end": {
                            "line": 0,
                            "character": 19
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
            "end": 19
          }
        }
      ],
      "locals": {},
      "parserErrors": [],
      "binderErrors": [
        {
          "range": {
            "start": 13,
            "end": 14
          },
          "message": "Duplicated declaration for “T”",
          "severity": 2,
          "info": {
            "related": [
              {
                "location": {
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
                },
                "message": "“T” is already declared here"
              }
            ]
          }
        }
      ]
    }
  }
}
