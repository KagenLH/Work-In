'use strict';
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if(Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    avatarUrl: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 1000]
      },
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.toSafeObject = function () {
    const { id, username, email, avatarUrl } = this;
    return { id, username, email, avatarUrl };
  };

  User.prototype.validatePassword = function (password) {
    console.log(this);
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async (id) => {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async ({ credential, password }) => {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    console.log(user);
    if(user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async ({ username, email, password }) => {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      avatarUrl
    });

    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};