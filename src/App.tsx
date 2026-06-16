import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  InputAdornment
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      email,
      password
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="xs">
        <Card sx={{ borderRadius: 4, boxShadow: 6 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                mb: 1
              }}
            >
              Login
            </Typography>

            <Typography
              color="text.secondary"
              component="p"
              sx={{
                textAlign: "center",
                mb: 4
              }}
            >
              Sign in to continue
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    )
                  }
                }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                sx={{ mt: 1 }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3, py: 1.4, borderRadius: 2 }}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
