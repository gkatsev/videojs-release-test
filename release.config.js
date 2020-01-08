module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'videojs'
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'videojs'
    }],
    ['@semantic-release/npm', {
      tag: 'next'
    }],
    ['@semantic-release/github', {
      assets: 'dist/video-js*.zip'
    }],
    ['@semantic-release/git', {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message: '${nextRelease.version}'
    }]
  ]
};
