/*
 * @Description: 
 * @Author: wangYong
 * @Date: 2019-12-30 17:40:41
 * @LastEditors  : wangYong
 * @LastEditTime : 2020-01-03 18:06:36
 */
module.exports = {
  "disableEmoji": false,
  "list": [
    "feat",
    "fix",
    "chore",
    "docs",
    "test",
    "build",
    "refactor",
    "revert",
    "style",
    "ci",
    "perf"
  ],
  "maxMessageLength": 64,
  "minMessageLength": 3,
  "questions": [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna"
  ],
  "scopes": [],
  "types": {
    "chore": {
      "description": "构建过程或辅助工具的更改",
      "emoji": "🤖",
      "value": "chore"
    },
    "ci": {
      "description": "CI related changes",
      "emoji": "🎡",
      "value": "ci"
    },
    "docs": {
      "description": "更新文档",
      "emoji": "✏️",
      "value": "docs"
    },
    "feat": {
      "description": "添加新功能",
      "emoji": "🎸",
      "value": "feat"
    },
    "fix": {
      "description": "修复bug",
      "emoji": "🐛",
      "value": "fix"
    },
    "perf": {
      "description": "更改代码以提高性能",
      "emoji": "⚡️",
      "value": "perf"
    },
    "refactor": {
      "description": "代码的修改并没有修改bug，也没有添加新功能",
      "emoji": "💡",
      "value": "refactor"
    },
    "release": {
      "description": "提交发布版本",
      "emoji": "🏹",
      "value": "release"
    },
    "style": {
      "description": "并没有影响代码的意义(空格，去掉分号，格式的修改等)",
      "emoji": "💄",
      "value": "style"
    },
    "test": {
      "description": "添加测试",
      "emoji": "💍",
      "value": "test"
    },
    "build": {
      "description": "building dist code",
      "emoji": "⛏️",
      "value": "build"
    },
    "revert": {
      "description": "回滚分支",
      "emoji": "🐐",
      "value": "revert"
    },
    "upgrade": {
      "description": "升级依赖的第三方库版本",
      "emoji": "📦",
      "value": "upgrade"
    }
  }
}
