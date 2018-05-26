const masterMergedPR = {
  action: 'closed',
  pull_request: {
    base: {
      ref: 'master'
    },
    merged: true
  }
};

const masterNotMergedPR = {
  action: 'closed',
  pull_request: {
    base: {
      ref: 'master'
    },
    merged: false
  }
};

const masterPROpen = {
  action: 'open',
  pull_request: {
    base: {
      ref: 'master'
    },
    merged: false
  }
};

const notMasterMergedPR = {
  action: 'closed',
  pull_request: {
    base: {
      ref: 'some-other-branch'
    },
    merged: true
  }
};

const fullScale = {
  action: 'closed',
  number: 6,
  pull_request: {
    url: 'https://api.github.com/repos/Bouncey/guides/pulls/6',
    id: 142682757,
    html_url: 'https://github.com/Bouncey/guides/pull/6',
    diff_url: 'https://github.com/Bouncey/guides/pull/6.diff',
    patch_url: 'https://github.com/Bouncey/guides/pull/6.patch',
    issue_url: 'https://api.github.com/repos/Bouncey/guides/issues/6',
    number: 6,
    state: 'closed',
    locked: false,
    title: 'Feat/reduce func calls',
    user: {
      login: 'Bouncey',
      id: 18572518,
      avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Bouncey',
      html_url: 'https://github.com/Bouncey',
      followers_url: 'https://api.github.com/users/Bouncey/followers',
      following_url:
        'https://api.github.com/users/Bouncey/following{/other_user}',
      gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Bouncey/subscriptions',
      organizations_url: 'https://api.github.com/users/Bouncey/orgs',
      repos_url: 'https://api.github.com/users/Bouncey/repos',
      events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Bouncey/received_events',
      type: 'User',
      site_admin: false
    },
    body: '',
    created_at: '2017-09-22T22:39:26Z',
    updated_at: '2017-09-22T22:39:39Z',
    closed_at: '2017-09-22T22:39:39Z',
    merged_at: '2017-09-22T22:39:39Z',
    merge_commit_sha: '53948fc50d1debd9fbeb1bf051e526187c218294',
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    milestone: null,
    commits_url: 'https://api.github.com/repos/Bouncey/guides/pulls/6/commits',
    review_comments_url:
      'https://api.github.com/repos/Bouncey/guides/pulls/6/comments',
    review_comment_url:
      'https://api.github.com/repos/Bouncey/guides/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/Bouncey/guides/issues/6/comments',
    statuses_url:
      'https://api.github.com/repos/Bouncey/guides/statuses/3549f114974589f23684cfb755721604ca3e40a7',
    head: {
      label: 'Bouncey:feat/reduceFuncCalls',
      ref: 'feat/reduceFuncCalls',
      sha: '3549f114974589f23684cfb755721604ca3e40a7',
      user: {
        login: 'Bouncey',
        id: 18572518,
        avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Bouncey',
        html_url: 'https://github.com/Bouncey',
        followers_url: 'https://api.github.com/users/Bouncey/followers',
        following_url:
          'https://api.github.com/users/Bouncey/following{/other_user}',
        gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Bouncey/subscriptions',
        organizations_url: 'https://api.github.com/users/Bouncey/orgs',
        repos_url: 'https://api.github.com/users/Bouncey/repos',
        events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Bouncey/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 93936075,
        name: 'guides',
        full_name: 'Bouncey/guides',
        owner: {
          login: 'Bouncey',
          id: 18572518,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Bouncey',
          html_url: 'https://github.com/Bouncey',
          followers_url: 'https://api.github.com/users/Bouncey/followers',
          following_url:
            'https://api.github.com/users/Bouncey/following{/other_user}',
          gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Bouncey/subscriptions',
          organizations_url: 'https://api.github.com/users/Bouncey/orgs',
          repos_url: 'https://api.github.com/users/Bouncey/repos',
          events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Bouncey/received_events',
          type: 'User',
          site_admin: false
        },
        private: false,
        html_url: 'https://github.com/Bouncey/guides',
        description: 'A collection of guides to various tools',
        fork: true,
        url: 'https://api.github.com/repos/Bouncey/guides',
        forks_url: 'https://api.github.com/repos/Bouncey/guides/forks',
        keys_url: 'https://api.github.com/repos/Bouncey/guides/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Bouncey/guides/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Bouncey/guides/teams',
        hooks_url: 'https://api.github.com/repos/Bouncey/guides/hooks',
        issue_events_url:
          'https://api.github.com/repos/Bouncey/guides/issues/events{/number}',
        events_url: 'https://api.github.com/repos/Bouncey/guides/events',
        assignees_url:
          'https://api.github.com/repos/Bouncey/guides/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Bouncey/guides/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Bouncey/guides/tags',
        blobs_url:
          'https://api.github.com/repos/Bouncey/guides/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Bouncey/guides/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Bouncey/guides/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Bouncey/guides/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Bouncey/guides/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/Bouncey/guides/languages',
        stargazers_url:
          'https://api.github.com/repos/Bouncey/guides/stargazers',
        contributors_url:
          'https://api.github.com/repos/Bouncey/guides/contributors',
        subscribers_url:
          'https://api.github.com/repos/Bouncey/guides/subscribers',
        subscription_url:
          'https://api.github.com/repos/Bouncey/guides/subscription',
        commits_url:
          'https://api.github.com/repos/Bouncey/guides/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Bouncey/guides/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Bouncey/guides/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Bouncey/guides/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Bouncey/guides/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Bouncey/guides/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/Bouncey/guides/merges',
        archive_url:
          'https://api.github.com/repos/Bouncey/guides/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/Bouncey/guides/downloads',
        issues_url:
          'https://api.github.com/repos/Bouncey/guides/issues{/number}',
        pulls_url: 'https://api.github.com/repos/Bouncey/guides/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Bouncey/guides/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Bouncey/guides/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/Bouncey/guides/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Bouncey/guides/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Bouncey/guides/deployments',
        created_at: '2017-06-10T11:53:35Z',
        updated_at: '2017-06-10T11:53:37Z',
        pushed_at: '2017-09-22T22:39:39Z',
        git_url: 'git://github.com/Bouncey/guides.git',
        ssh_url: 'git@github.com:Bouncey/guides.git',
        clone_url: 'https://github.com/Bouncey/guides.git',
        svn_url: 'https://github.com/Bouncey/guides',
        homepage: '',
        size: 27357,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master'
      }
    },
    base: {
      label: 'Bouncey:deploy-test',
      ref: 'master',
      sha: '037386bb22e65c73fd4093b9161a14685a786150',
      user: {
        login: 'Bouncey',
        id: 18572518,
        avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Bouncey',
        html_url: 'https://github.com/Bouncey',
        followers_url: 'https://api.github.com/users/Bouncey/followers',
        following_url:
          'https://api.github.com/users/Bouncey/following{/other_user}',
        gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Bouncey/subscriptions',
        organizations_url: 'https://api.github.com/users/Bouncey/orgs',
        repos_url: 'https://api.github.com/users/Bouncey/repos',
        events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Bouncey/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 93936075,
        name: 'guides',
        full_name: 'Bouncey/guides',
        owner: {
          login: 'Bouncey',
          id: 18572518,
          avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Bouncey',
          html_url: 'https://github.com/Bouncey',
          followers_url: 'https://api.github.com/users/Bouncey/followers',
          following_url:
            'https://api.github.com/users/Bouncey/following{/other_user}',
          gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Bouncey/subscriptions',
          organizations_url: 'https://api.github.com/users/Bouncey/orgs',
          repos_url: 'https://api.github.com/users/Bouncey/repos',
          events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Bouncey/received_events',
          type: 'User',
          site_admin: false
        },
        private: false,
        html_url: 'https://github.com/Bouncey/guides',
        description: 'A collection of guides to various tools',
        fork: true,
        url: 'https://api.github.com/repos/Bouncey/guides',
        forks_url: 'https://api.github.com/repos/Bouncey/guides/forks',
        keys_url: 'https://api.github.com/repos/Bouncey/guides/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/Bouncey/guides/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/Bouncey/guides/teams',
        hooks_url: 'https://api.github.com/repos/Bouncey/guides/hooks',
        issue_events_url:
          'https://api.github.com/repos/Bouncey/guides/issues/events{/number}',
        events_url: 'https://api.github.com/repos/Bouncey/guides/events',
        assignees_url:
          'https://api.github.com/repos/Bouncey/guides/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/Bouncey/guides/branches{/branch}',
        tags_url: 'https://api.github.com/repos/Bouncey/guides/tags',
        blobs_url:
          'https://api.github.com/repos/Bouncey/guides/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Bouncey/guides/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Bouncey/guides/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/Bouncey/guides/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/Bouncey/guides/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/Bouncey/guides/languages',
        stargazers_url:
          'https://api.github.com/repos/Bouncey/guides/stargazers',
        contributors_url:
          'https://api.github.com/repos/Bouncey/guides/contributors',
        subscribers_url:
          'https://api.github.com/repos/Bouncey/guides/subscribers',
        subscription_url:
          'https://api.github.com/repos/Bouncey/guides/subscription',
        commits_url:
          'https://api.github.com/repos/Bouncey/guides/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/Bouncey/guides/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/Bouncey/guides/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/Bouncey/guides/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/Bouncey/guides/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/Bouncey/guides/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/Bouncey/guides/merges',
        archive_url:
          'https://api.github.com/repos/Bouncey/guides/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/Bouncey/guides/downloads',
        issues_url:
          'https://api.github.com/repos/Bouncey/guides/issues{/number}',
        pulls_url: 'https://api.github.com/repos/Bouncey/guides/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/Bouncey/guides/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/Bouncey/guides/notifications{?since,all,participating}',
        labels_url: 'https://api.github.com/repos/Bouncey/guides/labels{/name}',
        releases_url:
          'https://api.github.com/repos/Bouncey/guides/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/Bouncey/guides/deployments',
        created_at: '2017-06-10T11:53:35Z',
        updated_at: '2017-06-10T11:53:37Z',
        pushed_at: '2017-09-22T22:39:39Z',
        git_url: 'git://github.com/Bouncey/guides.git',
        ssh_url: 'git@github.com:Bouncey/guides.git',
        clone_url: 'https://github.com/Bouncey/guides.git',
        svn_url: 'https://github.com/Bouncey/guides',
        homepage: '',
        size: 27357,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master'
      }
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/Bouncey/guides/pulls/6'
      },
      html: {
        href: 'https://github.com/Bouncey/guides/pull/6'
      },
      issue: {
        href: 'https://api.github.com/repos/Bouncey/guides/issues/6'
      },
      comments: {
        href: 'https://api.github.com/repos/Bouncey/guides/issues/6/comments'
      },
      review_comments: {
        href: 'https://api.github.com/repos/Bouncey/guides/pulls/6/comments'
      },
      review_comment: {
        href:
          'https://api.github.com/repos/Bouncey/guides/pulls/comments{/number}'
      },
      commits: {
        href: 'https://api.github.com/repos/Bouncey/guides/pulls/6/commits'
      },
      statuses: {
        href:
          'https://api.github.com/repos/Bouncey/guides/statuses/3549f114974589f23684cfb755721604ca3e40a7'
      }
    },
    author_association: 'OWNER',
    merged: true,
    mergeable: null,
    rebaseable: null,
    mergeable_state: 'unknown',
    merged_by: {
      login: 'Bouncey',
      id: 18572518,
      avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Bouncey',
      html_url: 'https://github.com/Bouncey',
      followers_url: 'https://api.github.com/users/Bouncey/followers',
      following_url:
        'https://api.github.com/users/Bouncey/following{/other_user}',
      gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Bouncey/subscriptions',
      organizations_url: 'https://api.github.com/users/Bouncey/orgs',
      repos_url: 'https://api.github.com/users/Bouncey/repos',
      events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Bouncey/received_events',
      type: 'User',
      site_admin: false
    },
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: false,
    commits: 8,
    additions: 6432,
    deletions: 6684,
    changed_files: 962
  },
  repository: {
    id: 93936075,
    name: 'guides',
    full_name: 'Bouncey/guides',
    owner: {
      login: 'Bouncey',
      id: 18572518,
      avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Bouncey',
      html_url: 'https://github.com/Bouncey',
      followers_url: 'https://api.github.com/users/Bouncey/followers',
      following_url:
        'https://api.github.com/users/Bouncey/following{/other_user}',
      gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Bouncey/subscriptions',
      organizations_url: 'https://api.github.com/users/Bouncey/orgs',
      repos_url: 'https://api.github.com/users/Bouncey/repos',
      events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Bouncey/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/Bouncey/guides',
    description: 'A collection of guides to various tools',
    fork: true,
    url: 'https://api.github.com/repos/Bouncey/guides',
    forks_url: 'https://api.github.com/repos/Bouncey/guides/forks',
    keys_url: 'https://api.github.com/repos/Bouncey/guides/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Bouncey/guides/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Bouncey/guides/teams',
    hooks_url: 'https://api.github.com/repos/Bouncey/guides/hooks',
    issue_events_url:
      'https://api.github.com/repos/Bouncey/guides/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Bouncey/guides/events',
    assignees_url:
      'https://api.github.com/repos/Bouncey/guides/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Bouncey/guides/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Bouncey/guides/tags',
    blobs_url: 'https://api.github.com/repos/Bouncey/guides/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/Bouncey/guides/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/Bouncey/guides/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/Bouncey/guides/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/Bouncey/guides/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/Bouncey/guides/languages',
    stargazers_url: 'https://api.github.com/repos/Bouncey/guides/stargazers',
    contributors_url:
      'https://api.github.com/repos/Bouncey/guides/contributors',
    subscribers_url: 'https://api.github.com/repos/Bouncey/guides/subscribers',
    subscription_url:
      'https://api.github.com/repos/Bouncey/guides/subscription',
    commits_url: 'https://api.github.com/repos/Bouncey/guides/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Bouncey/guides/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Bouncey/guides/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Bouncey/guides/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Bouncey/guides/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Bouncey/guides/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Bouncey/guides/merges',
    archive_url:
      'https://api.github.com/repos/Bouncey/guides/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/Bouncey/guides/downloads',
    issues_url: 'https://api.github.com/repos/Bouncey/guides/issues{/number}',
    pulls_url: 'https://api.github.com/repos/Bouncey/guides/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Bouncey/guides/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Bouncey/guides/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/Bouncey/guides/labels{/name}',
    releases_url: 'https://api.github.com/repos/Bouncey/guides/releases{/id}',
    deployments_url: 'https://api.github.com/repos/Bouncey/guides/deployments',
    created_at: '2017-06-10T11:53:35Z',
    updated_at: '2017-06-10T11:53:37Z',
    pushed_at: '2017-09-22T22:39:39Z',
    git_url: 'git://github.com/Bouncey/guides.git',
    ssh_url: 'git@github.com:Bouncey/guides.git',
    clone_url: 'https://github.com/Bouncey/guides.git',
    svn_url: 'https://github.com/Bouncey/guides',
    homepage: '',
    size: 27357,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  },
  sender: {
    login: 'Bouncey',
    id: 18572518,
    avatar_url: 'https://avatars1.githubusercontent.com/u/18572518?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Bouncey',
    html_url: 'https://github.com/Bouncey',
    followers_url: 'https://api.github.com/users/Bouncey/followers',
    following_url:
      'https://api.github.com/users/Bouncey/following{/other_user}',
    gists_url: 'https://api.github.com/users/Bouncey/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Bouncey/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Bouncey/subscriptions',
    organizations_url: 'https://api.github.com/users/Bouncey/orgs',
    repos_url: 'https://api.github.com/users/Bouncey/repos',
    events_url: 'https://api.github.com/users/Bouncey/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Bouncey/received_events',
    type: 'User',
    site_admin: false
  }
};

module.exports = {
  fullScale,
  masterMergedPR,
  masterNotMergedPR,
  masterPROpen,
  notMasterMergedPR
};
