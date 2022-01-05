var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git+https://github.com/sonjavanteese/sv-pages-1.git', // Update to point to your repository  
        user: {
            name: 'SonjaVanTeese', // update to use your name
            email: 'sonjavanteese@ok.de' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)