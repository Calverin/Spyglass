exports['mcdoc __fixture__ dispatcher/indexed 1'] = {
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
          "nextAnonymousIndex": 1
        }
      },
      "::test::<anonymous 0>": {
        "data": {
          "typeDef": {
            "kind": "struct",
            "fields": [
              {
                "kind": "pair",
                "key": "id",
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
              "start": 35,
              "end": 41
            },
            "posRange": {
              "start": {
                "line": 0,
                "character": 35
              },
              "end": {
                "line": 0,
                "character": 41
              }
            },
            "contributor": "binder"
          }
        ],
        "members": {
          "id": {
            "definition": [
              {
                "uri": "file:///test.mcdoc",
                "range": {
                  "start": 45,
                  "end": 47
                },
                "posRange": {
                  "start": {
                    "line": 1,
                    "character": 1
                  },
                  "end": {
                    "line": 1,
                    "character": 3
                  }
                },
                "fullRange": {
                  "start": 45,
                  "end": 55
                },
                "fullPosRange": {
                  "start": {
                    "line": 1,
                    "character": 1
                  },
                  "end": {
                    "line": 1,
                    "character": 11
                  }
                },
                "contributor": "binder"
              }
            ]
          }
        }
      },
      "::test::Test": {
        "data": {
          "typeDef": {
            "kind": "indexed",
            "child": {
              "kind": "dispatcher",
              "parallelIndices": [
                {
                  "kind": "static",
                  "value": "%fallback"
                }
              ],
              "registry": "spyglassmc:test"
            },
            "parallelIndices": [
              {
                "kind": "static",
                "value": "id"
              }
            ]
          }
        },
        "desc": "",
        "subcategory": "type_alias",
        "definition": [
          {
            "uri": "file:///test.mcdoc",
            "range": {
              "start": 65,
              "end": 69
            },
            "posRange": {
              "start": {
                "line": 4,
                "character": 5
              },
              "end": {
                "line": 4,
                "character": 9
              }
            },
            "fullRange": {
              "start": 60,
              "end": 102
            },
            "fullPosRange": {
              "start": {
                "line": 4,
                "character": 0
              },
              "end": {
                "line": 4,
                "character": 42
              }
            },
            "contributor": "binder"
          }
        ]
      }
    },
    "mcdoc/dispatcher": {
      "spyglassmc:test": {
        "reference": [
          {
            "uri": "file:///test.mcdoc",
            "range": {
              "start": 9,
              "end": 24
            },
            "posRange": {
              "start": {
                "line": 0,
                "character": 9
              },
              "end": {
                "line": 0,
                "character": 24
              }
            },
            "fullRange": {
              "start": 0,
              "end": 60
            },
            "fullPosRange": {
              "start": {
                "line": 0,
                "character": 0
              },
              "end": {
                "line": 4,
                "character": 0
              }
            },
            "contributor": "binder"
          },
          {
            "uri": "file:///test.mcdoc",
            "range": {
              "start": 72,
              "end": 87
            },
            "posRange": {
              "start": {
                "line": 4,
                "character": 12
              },
              "end": {
                "line": 4,
                "character": 27
              }
            },
            "fullRange": {
              "start": 72,
              "end": 102
            },
            "fullPosRange": {
              "start": {
                "line": 4,
                "character": 12
              },
              "end": {
                "line": 4,
                "character": 42
              }
            },
            "contributor": "binder"
          }
        ],
        "members": {
          "%none": {
            "data": {
              "typeDef": {
                "kind": "struct",
                "fields": [
                  {
                    "kind": "pair",
                    "key": "id",
                    "type": {
                      "kind": "string"
                    }
                  }
                ]
              }
            },
            "definition": [
              {
                "uri": "file:///test.mcdoc",
                "range": {
                  "start": 25,
                  "end": 30
                },
                "posRange": {
                  "start": {
                    "line": 0,
                    "character": 25
                  },
                  "end": {
                    "line": 0,
                    "character": 30
                  }
                },
                "fullRange": {
                  "start": 0,
                  "end": 60
                },
                "fullPosRange": {
                  "start": {
                    "line": 0,
                    "character": 0
                  },
                  "end": {
                    "line": 4,
                    "character": 0
                  }
                },
                "contributor": "binder"
              }
            ]
          },
          "%fallback": {
            "reference": [
              {
                "uri": "file:///test.mcdoc",
                "range": {
                  "start": 88,
                  "end": 97
                },
                "posRange": {
                  "start": {
                    "line": 4,
                    "character": 28
                  },
                  "end": {
                    "line": 4,
                    "character": 37
                  }
                },
                "fullRange": {
                  "start": 72,
                  "end": 102
                },
                "fullPosRange": {
                  "start": {
                    "line": 4,
                    "character": 12
                  },
                  "end": {
                    "line": 4,
                    "character": 42
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
        "end": 102
      },
      "children": [
        {
          "type": "mcdoc:module",
          "children": [
            {
              "type": "mcdoc:dispatch_statement",
              "children": [
                {
                  "type": "mcdoc:literal",
                  "range": {
                    "start": 0,
                    "end": 8
                  },
                  "value": "dispatch",
                  "colorTokenType": "keyword"
                },
                {
                  "type": "resource_location",
                  "range": {
                    "start": 9,
                    "end": 24
                  },
                  "namespace": "spyglassmc",
                  "path": [
                    "test"
                  ],
                  "symbol": {
                    "category": "mcdoc/dispatcher",
                    "path": [
                      "spyglassmc:test"
                    ]
                  }
                },
                {
                  "type": "mcdoc:index_body",
                  "children": [
                    {
                      "type": "mcdoc:literal",
                      "range": {
                        "start": 25,
                        "end": 30
                      },
                      "value": "%none",
                      "symbol": {
                        "category": "mcdoc/dispatcher",
                        "path": [
                          "spyglassmc:test",
                          "%none"
                        ]
                      }
                    }
                  ],
                  "range": {
                    "start": 24,
                    "end": 31
                  }
                },
                {
                  "type": "mcdoc:literal",
                  "range": {
                    "start": 32,
                    "end": 34
                  },
                  "value": "to"
                },
                {
                  "type": "mcdoc:struct",
                  "children": [
                    {
                      "type": "mcdoc:literal",
                      "range": {
                        "start": 35,
                        "end": 41
                      },
                      "value": "struct",
                      "colorTokenType": "keyword",
                      "symbol": {
                        "category": "mcdoc",
                        "path": [
                          "::test::<anonymous 0>"
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
                                "start": 45,
                                "end": 47
                              },
                              "value": "id",
                              "symbol": {
                                "category": "mcdoc",
                                "path": [
                                  "::test::<anonymous 0>",
                                  "id"
                                ]
                              }
                            },
                            {
                              "type": "mcdoc:type/string",
                              "children": [
                                {
                                  "type": "mcdoc:literal",
                                  "range": {
                                    "start": 49,
                                    "end": 55
                                  },
                                  "value": "string",
                                  "colorTokenType": "type"
                                }
                              ],
                              "range": {
                                "start": 49,
                                "end": 55
                              }
                            }
                          ],
                          "range": {
                            "start": 45,
                            "end": 55
                          }
                        }
                      ],
                      "range": {
                        "start": 42,
                        "end": 60
                      }
                    }
                  ],
                  "range": {
                    "start": 35,
                    "end": 60
                  }
                }
              ],
              "range": {
                "start": 0,
                "end": 60
              }
            },
            {
              "type": "mcdoc:type_alias",
              "children": [
                {
                  "type": "mcdoc:doc_comments",
                  "children": [],
                  "range": {
                    "start": 60,
                    "end": 60
                  }
                },
                {
                  "type": "mcdoc:literal",
                  "range": {
                    "start": 60,
                    "end": 64
                  },
                  "value": "type",
                  "colorTokenType": "keyword"
                },
                {
                  "type": "mcdoc:identifier",
                  "range": {
                    "start": 65,
                    "end": 69
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
                  "type": "mcdoc:type/dispatcher",
                  "children": [
                    {
                      "type": "resource_location",
                      "range": {
                        "start": 72,
                        "end": 87
                      },
                      "namespace": "spyglassmc",
                      "path": [
                        "test"
                      ],
                      "symbol": {
                        "category": "mcdoc/dispatcher",
                        "path": [
                          "spyglassmc:test"
                        ]
                      }
                    },
                    {
                      "type": "mcdoc:index_body",
                      "children": [
                        {
                          "type": "mcdoc:literal",
                          "range": {
                            "start": 88,
                            "end": 97
                          },
                          "value": "%fallback",
                          "symbol": {
                            "category": "mcdoc/dispatcher",
                            "path": [
                              "spyglassmc:test",
                              "%fallback"
                            ]
                          }
                        }
                      ],
                      "range": {
                        "start": 87,
                        "end": 98
                      }
                    },
                    {
                      "type": "mcdoc:index_body",
                      "children": [
                        {
                          "type": "mcdoc:identifier",
                          "range": {
                            "start": 99,
                            "end": 101
                          },
                          "value": "id"
                        }
                      ],
                      "range": {
                        "start": 98,
                        "end": 102
                      }
                    }
                  ],
                  "range": {
                    "start": 72,
                    "end": 102
                  }
                }
              ],
              "range": {
                "start": 60,
                "end": 102
              }
            }
          ],
          "range": {
            "start": 0,
            "end": 102
          }
        }
      ],
      "locals": {},
      "parserErrors": [],
      "binderErrors": []
    }
  }
}
