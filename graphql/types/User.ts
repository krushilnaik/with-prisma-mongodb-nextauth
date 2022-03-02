import { extendType, objectType, stringArg } from "nexus";

export const User = objectType({
	name: "User",
	definition(t) {
		t.id("id");
		t.string("name");
		t.string("email");
		t.string("image");
		t.list.field("posts", {
			type: "Post",
			args: {
				userId: stringArg(),
			},
			async resolve({ id }, args, context) {
				return await context.prisma.post.findMany({
					where: {
						userId: id,
					},
				});
			},
		});
	},
});

export const UserQueries = extendType({
	type: "Query",
	definition(t) {
		t.field("user", {
			type: "User",
			args: {
				id: stringArg(),
			},
			async resolve(_parent, { id }, context) {
				return await context.prisma.user.findUnique({
					where: { id },
					include: {
						posts: {
							where: {
								userId: id,
							},
						},
					},
				});
			},
		});
		t.list.field("users", {
			type: "User",
			async resolve(_parent, _args, context) {
				return await context.prisma.user.findMany();
			},
		});
	},
});
