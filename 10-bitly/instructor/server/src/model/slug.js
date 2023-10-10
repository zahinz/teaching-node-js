import { DataTypes } from "sequelize";
import { postgresConnection } from "../database/connection";

const Slug = postgresConnection.define(
  "Slug",
  {
    original_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortened_link: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    visit_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Slug;
