import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Modal,
} from "@mantine/core";
import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";

// import { signIn, signUpWithEmailAndPassword } from "../../../client.js";

import SuccessfulLoginDialog from "../dialogs/SuccessfulLoginDialog";
import FailedLoginDialog from "../dialogs/FailedLoginDialog";

function LoginModal({ opened, close, logged }) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFailed, setOpenFailed] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [user, setUser] = React.useState(null);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      lastName: "",
      phone: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        styles={{
          body: { backgroundColor: "#090325" },
          header: { backgroundColor: "#090325", color: "#aaa6c3" },
          close: {
            color: "#00B700",
            "&:hover": { background: "#00B700", color: "#090325" },
          },
          overlay: { backdropFilter: "blur(5px)" },
        }}
      >
        <Paper radius="md" p="xl" withBorder>
          <Text size="lg" weight={500} mb={15} fw={700}>
            Welcome to WealthWise
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <form
            onSubmit={(event) => {
              event.preventDefault(); // prevent default form submission behavior
              const { name, lastName, email, phone, password } = form.values;
              if (type === "register") {
                signUpWithEmailAndPassword({
                  name,
                  lastName,
                  email,
                  phone,
                  password,
                })
                  .then(() => {
                    // handle successful user creation
                    setOpenSuccess(true);
                    setUser(`${name} ${lastName}`);
                    close();
                  })
                  .catch((error) => {
                    setOpenFailed(true);
                    setMessage(error); // handle error
                  });
              } else {
                signIn({ email, password })
                  .then(() => {
                    setOpenSuccess(true);
                    setUser(`${name} ${lastName}`);
                    logged(true);
                    close();
                  })
                  .catch((error) => {
                    setOpenFailed(true);
                    setMessage(
                      "Please Ensure you have entered the correct email and password!"
                    );
                  }); // handle login form submission
              }
            }}
          >
            <Stack>
              {type === "register" && (
                <>
                  <div className="flex justify-around gap-2">
                    <TextInput
                      label="Name"
                      placeholder="Your name"
                      value={form.values.name}
                      onChange={(event) =>
                        form.setFieldValue("name", event.currentTarget.value)
                      }
                      radius="md"
                    />

                    <TextInput
                      label="Surname"
                      placeholder="Your last name"
                      value={form.values.lastName}
                      onChange={(event) =>
                        form.setFieldValue(
                          "lastName",
                          event.currentTarget.value
                        )
                      }
                      radius="md"
                    />
                  </div>

                  <TextInput
                    required
                    label="Phone"
                    placeholder="Your phone number"
                    value={form.values.phone}
                    onChange={(event) =>
                      form.setFieldValue("phone", event.currentTarget.value)
                    }
                    radius="md"
                  />
                </>
              )}

              <TextInput
                required
                label="Email"
                placeholder="hello@wealthWise.com"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="md"
              />

              {type === "register" && (
                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                  styles={{
                    icon: { color: "white" },
                    input: {
                      background: form.values.terms
                        ? "#00B700 !important"
                        : "white",
                      border: form.values.terms
                        ? "transparent !important"
                        : "1px solid black",
                    },
                  }}
                />
              )}
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button
                type="submit"
                radius="xl"
                sx={{ backgroundColor: "#090325 !important", color: "#00B700" }}
              >
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Paper>
      </Modal>
      <SuccessfulLoginDialog
        open={openSuccess}
        handleClose={() => setOpenSuccess(false)}
        user={user}
      />
      <FailedLoginDialog
        open={openFailed}
        handleClose={() => setOpenFailed(false)}
        message={message}
      />
    </>
  );
}

export default LoginModal;
