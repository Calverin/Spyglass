exports['mcfunction argument minecraft:resource_or_tag Parse "#minecraft:skeletons" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 20
    },
    "isTag": true,
    "namespace": "minecraft",
    "path": [
      "skeletons"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:resource_or_tag Parse "#skeletons" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 10
    },
    "isTag": true,
    "path": [
      "skeletons"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:resource_or_tag Parse "012" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 3
    },
    "path": [
      "012"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:resource_or_tag Parse "foo" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 3
    },
    "path": [
      "foo"
    ]
  },
  "errors": []
}

exports['mcfunction argument minecraft:resource_or_tag Parse "foo:bar" with {"registry":"bossbar"} 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 7
    },
    "namespace": "foo",
    "path": [
      "bar"
    ]
  },
  "errors": []
}
