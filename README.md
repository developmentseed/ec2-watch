# ec2-watch

A simple way to list ec2 instances running on your account with their size 
and running time.

## Setup

```
npm install
```

You'll need to copy the config_sample.json to config.json and add your own info.

## Running

If all goes well, running

```
node index.js
```

will output something like

```
-----------------------------------
--- Goooooood Moooooorning AWS! ---
-----------------------------------
i-48745d42 is a m3.large that has been running since 2 days ago.
i-16d51b1c is a t2.micro that has been running since 3 months ago.
i-5730595c is a t2.micro that has been running since 6 months ago.
i-f2e2eafb is a t1.micro that has been running since a year ago.
-----------------------------------
```