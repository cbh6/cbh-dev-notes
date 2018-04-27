# Update npm packages

This info was extracted from this post [link](http://www.hostingadvice.com/how-to/update-npm-packages/)

The npm update command allows you to update any out-of-date packages, according to your package.json versions. This is the default way to update packages with npm.

## How Do I Know Which Packages Have Updates?
One built-in way to check which packages are outdated is to run the npm outdated command.

Another way, which I prefer, is to use the npm-check-updates (ncu) module. This package allows you to easily upgrade your package.json dependencies to the latest versions of modules regardless of any version constraints in those files. Then with the npm install or npm update commands you can upgrade the installed packages.

## First, Install node, npm, & ncu
If you haven’t yet, see this tutorial to install node and npm.

Now we can install the ncu tool globally, by typing the following:

```shell
npm install -g npm-check-updates
```

## Detecting Updates with npm

```shell
npm outdated
```

## Detecting Updates with ncu
Using the ncu tool we can also detect which packages have newer versions:

```shell
ncu
```

## Strict vs. Non-Strict Versioned Updates
We can either allow for strict versioned updates (strictly within our package.json semver constraints) or non-strict versioned updates (to update regardless of our semver constraints).

### Strict Versioned Updates Using npm
Let’s use the npm update command to allow for strict versioned updates:

```shell
npm update
```

### Non-Strict Versioned Updates Using ncu
For non-strict versioned updates, there are several command line options we can use with ncu.

```shell
ncu –upgrade [package]
```

Please note that the ncu tool does maintain your existing semantic versioning policies (e.g., “allow only minor upgrades,” in our case), when updating the package.json file. Therefore, the major version of the “request” package was increased, but the policy of only allowing minor upgrades upon a npm update is still in effect.

### ncu –upgrade
To update all of our package dependencies in package.json

```shell
ncu –upgrade
```