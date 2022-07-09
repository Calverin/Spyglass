exports['mcdoc __fixture__ struct/duplicated keys 1'] = {
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
            "kind": "struct",
            "fields": [
              {
                "kind": "pair",
                "key": "naughty",
                "type": {
                  "kind": "boolean"
                }
              },
              {
                "kind": "pair",
                "key": "naughty",
                "type": {
                  "kind": "string"
                }
              }
            ]
          }
        },
        "subcategory": "struct",
        "definition": [
          {
            "uri": "file:///test.mcdoc",
            "range": {
              "start": 7,
              "end": 11
            },
            "posRange": {
              "start": {
                "line": 0,
                "character": 7
              },
              "end": {
                "line": 0,
                "character": 11
              }
            },
            "fullRange": {
              "start": 0,
              "end": 52
            },
            "fullPosRange": {
              "start": {
                "line": 0,
                "character": 0
              },
              "end": {
                "line": 3,
                "character": 1
              }
            },
            "contributor": "binder"
          }
        ],
        "members": {
          "naughty": {
            "definition": [
              {
                "uri": "file:///test.mcdoc",
                "range": {
                  "start": 15,
                  "end": 22
                },
                "posRange": {
                  "start": {
                    "line": 1,
                    "character": 1
                  },
                  "end": {
                    "line": 1,
                    "character": 8
                  }
                },
                "fullRange": {
                  "start": 15,
                  "end": 31
                },
                "fullPosRange": {
                  "start": {
                    "line": 1,
                    "character": 1
                  },
                  "end": {
                    "line": 1,
                    "character": 17
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
        "end": 52
      },
      "children": [
        {
          "type": "mcdoc:module",
          "children": [
            {
              "type": "mcdoc:struct",
              "children": [
                {
                  "type": "mcdoc:literal",
                  "range": {
                    "start": 0,
                    "end": 6
                  },
                  "value": "struct",
                  "colorTokenType": "keyword"
                },
                {
                  "type": "mcdoc:identifier",
                  "range": {
                    "start": 7,
                    "end": 11
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
                  "type": "mcdoc:struct/block",
                  "children": [
                    {
                      "type": "mcdoc:struct/field/pair",
                      "children": [
                        {
                          "type": "mcdoc:identifier",
                          "range": {
                            "start": 15,
                            "end": 22
                          },
                          "value": "naughty",
                          "symbol": {
                            "category": "mcdoc",
                            "path": [
                              "::test::Test",
                              "naughty"
                            ]
                          }
                        },
                        {
                          "type": "mcdoc:type/boolean",
                          "children": [
                            {
                              "type": "mcdoc:literal",
                              "range": {
                                "start": 24,
                                "end": 31
                              },
                              "value": "boolean",
                              "colorTokenType": "type"
                            }
                          ],
                          "range": {
                            "start": 24,
                            "end": 31
                          }
                        }
                      ],
                      "range": {
                        "start": 15,
                        "end": 31
                      }
                    },
                    {
                      "type": "mcdoc:struct/field/pair",
                      "children": [
                        {
                          "type": "mcdoc:identifier",
                          "range": {
                            "start": 34,
                            "end": 41
                          },
                          "value": "naughty"
                        },
                        {
                          "type": "mcdoc:type/string",
                          "children": [
                            {
                              "type": "mcdoc:literal",
                              "range": {
                                "start": 43,
                                "end": 49
                              },
                              "value": "string",
                              "colorTokenType": "type"
                            }
                          ],
                          "range": {
                            "start": 43,
                            "end": 49
                          }
                        }
                      ],
                      "range": {
                        "start": 34,
                        "end": 49
                      }
                    }
                  ],
                  "range": {
                    "start": 12,
                    "end": 52
                  }
                }
              ],
              "range": {
                "start": 0,
                "end": 52
              }
            }
          ],
          "range": {
            "start": 0,
            "end": 52
          }
        }
      ],
      "locals": {},
      "parserErrors": [],
      "binderErrors": [
        {
          "range": {
            "start": 34,
            "end": 41
          },
          "message": "Duplicated declaration for “naughty”",
          "severity": 2,
          "info": {
            "related": [
              {
                "location": {
                  "uri": "file:///test.mcdoc",
                  "range": {
                    "start": 15,
                    "end": 22
                  },
                  "posRange": {
                    "start": {
                      "line": 1,
                      "character": 1
                    },
                    "end": {
                      "line": 1,
                      "character": 8
                    }
                  },
                  "fullRange": {
                    "start": 15,
                    "end": 31
                  },
                  "fullPosRange": {
                    "start": {
                      "line": 1,
                      "character": 1
                    },
                    "end": {
                      "line": 1,
                      "character": 17
                    }
                  },
                  "contributor": "binder"
                },
                "message": "“naughty” is already declared here"
              }
            ]
          }
        }
      ]
    }
  }
}
