---
title: "우분투 Unable to lock the administration directory (/var/lib/dpkg/) is another process using it 에러"
tags: ["리눅스", "에러모음"]
created: "2019-12-17T18:03:25.671Z"
modified: "2021-01-06T21:43:30.041Z"
urlPath: "우분투 Unable to lock the administration directory (/var/lib/dpkg/) is another process using it 에러"
---

![terminal](/images/terminal.jpeg)

# 우분투 Unable to lock the administration directory (/var/lib/dpkg/) is another process using it 에러

First of all we should check what process created the lock file using `lsof`:

```
sudo lsof /var/lib/dpkg/lock

```

or in another situation where `/var/lib/apt/lists/lock` is problematic:

```
sudo lsof /var/lib/apt/lists/lock

```

The output will be close to something like:

```
COMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF    NODE NAME
apt-get   12127 root   4uW  REG  252,1        0    86   /var/lib/apt/lists/lock

```

Then we should check what the commad is doing, we can find it out using `ps`, `pgrep` etc; the command is `apt-get` so I run:

```
pgrep apt-get -a

```

The `-a` switch lists the full command for me, in my case it's:

```
 pgrep -a apt-get
 12127 apt-get update

```

we can see that it's running `update` subcommand, I could run something like this too:

```
ps -f 12127

```

which produces:

```
UID        PID  PPID  C STIME TTY      STAT   TIME CMD
root     12127 12126  0 09:39 pts/0    S+     0:00 apt-get update

```

In this case I would wait for some minute for resource to be freed and if after 2 or 3 minute problem still exist or the command was something that I didn't care about or was not harmful for system (like this `apt-get update`) I send a `SIGTERM` to the process:

```
sudo kill -15 12127

```

It should do the work, If it didn't I'm going to send `SIGINT` this time (It's like pressing CTRL+C):

```
sudo kill -2 12127

```

If it didn't work too, we should send an `SIGHUP` (`kill -1`), and finally if nothing works I simply kill the process:

```
sudo kill -9 12127

```

or

```
sudo pkill -9 apt-get

```

Then I remove busy resources:

```
sudo rm /var/lib/apt/lists/lock
```
